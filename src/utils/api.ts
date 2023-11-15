import axios from 'axios';
import get from 'lodash/get';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

api.interceptors.request.use((config) => {
  const requestConfig = { ...config };
  if (requestConfig.method && requestConfig.method.toLowerCase() === 'get' && requestConfig.data) {
    requestConfig.params = requestConfig.data;
    delete requestConfig.data;
  }
  return requestConfig;
});

api.interceptors.response.use(
  (response) => {
    if (response.data?.data) {
      return response.data;
    }
    return { data: response.data };
  },
  async ({ message, response }) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      data: get(response, 'data.data') || get(response, 'data'),
      error: get(response, 'data.error'),
      message: get(response, 'data.message', message),
      statusCode: get(response, 'data.statusCode'),
    });
  },
);

export default api;
