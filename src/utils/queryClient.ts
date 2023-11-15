import type { Mutation } from '@tanstack/react-query';
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

const handleError = (
  ___: unknown,
  _: unknown,
  __?: unknown,
  mutation?: Mutation<unknown, unknown, unknown, unknown>,
) => {
  // const errorCode = error.statusCode;
  // const errorError = error.error;
  // let errorMessage = error.message;

  // if (errorMessage === 'Network Error') {
  //   errorMessage = t('global:networkError');
  // }
  if (mutation && mutation.meta) {
    // const { notToastErrorCodes }: { notToastErrorCodes?: (number | string)[] } = mutation.meta;
    // if (
    //   notToastErrorCodes &&
    //   (notToastErrorCodes.includes(errorError) || notToastErrorCodes.includes(errorCode))
    // ) {
    //   return;
    // }
  }

  // notification.error({ message: errorMessage, key: errorMessage });
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      structuralSharing: true,
      refetchOnWindowFocus: false,
      retry: false,
      networkMode: 'offlineFirst',
    },
    mutations: {
      networkMode: 'offlineFirst',
    },
  },
  mutationCache: new MutationCache({
    onError: (error, query, context, mutation) => handleError(error, query, context, mutation),
  }),
  queryCache: new QueryCache({
    onError: (error, query) => handleError(error, query),
  }),
});

export default queryClient;
