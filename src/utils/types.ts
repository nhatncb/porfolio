import type { FetchQueryOptions, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import type { AxiosRequestConfig, Method } from 'axios';

export type WebToken = {
  accessToken: string;
  refreshToken: string;
};

export type WebCookie = Partial<WebToken> | undefined;

export interface IListItem {
  _id: string;
  value: string;
}

export interface IListResult<T> {
  docs: T[];
  page: number;
  lastPage: number;
  totalDocs: number;
  totalPages: number;
  limit: number;
}

// TODO: Currently, there are many any types here,
// bacause each query/mutation will have different generic types
// It's difficult to cover all types for every query/mutation
// Consider to apply conditional types for useQuery or useMutation
export type ExtendOptions = {
  customParams?: Record<string, unknown>;
  method?: Method;
  transform?: (params: Record<string, unknown>) => Record<string, unknown>;
  axiosConfig?: AxiosRequestConfig;
  successMessage?: string;
  defaultToast?: boolean;
};

export type QueryModel = Record<
  string,
  | ((UseQueryOptions<any> | UseMutationOptions) & ExtendOptions)
  | ((payload: any) => (UseQueryOptions<any> | UseMutationOptions) & ExtendOptions)
>;

export interface IError {
  error: string;
  data: unknown;
  statusCode: number;
  message: string;
}

export type MetaProps = {
  notToastErrorCodes?: (number | string)[];
  noToastError?: boolean;
};

export type TokenParse = {
  email: string;
  exp: number;
  iat: number;
  role: string;
  side: string;
  _id: string;
};

export interface ITableQuery {
  // order?: SortOderEnum | undefined | null;
  // orderBy?: string | undefined;
  // sort?: string | undefined;
  page: number;
  limit: number;
}
export type IListQuery<T> = (T | Record<string, unknown>) & ITableQuery;

export interface FetchDetailOptions extends FetchQueryOptions<any, unknown, any, string[]> {
  queryKey: string[];
  apiUrl: string;
  customParams?: Record<string, unknown>;
  axiosConfig?: AxiosRequestConfig;
}

export interface FetchListOptions extends FetchQueryOptions<any, unknown, any, unknown[]> {
  queryKey: unknown[];
  apiUrl: string;
  customParams?: Record<string, unknown>;
  axiosConfig?: AxiosRequestConfig;
  omitKeys?: string[];
}
