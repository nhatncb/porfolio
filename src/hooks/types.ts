import type { QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export interface IListItem {
  id: string;
  name: string;
}

export interface IListResult<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  page?: number | undefined;
  totalPages: number;
  offset: number;
  prevPage?: number | null | undefined;
  nextPage?: number | null | undefined;
  pagingCounter: number;
  meta?: any;
}

export enum SortOderEnum {
  'descend' = 'descend',
  'ascend' = 'ascend',
}
export interface ITableQuery {
  order?: SortOderEnum | undefined | null;
  orderBy?: string | undefined;
  sort?: string | undefined; // This field is based on your BE requirements. This field is combined between order and orderBy field
  page: number;
  limit: number;
}

export type IListQuery<T> = (T | Record<string, unknown>) & ITableQuery;

// TODO: Currently, there are many any types here,
// bacause each query/mutation will have different generic types
// It's difficult to cover all types for every query/mutation
// Consider to apply conditional types for useQuery or useMutation

export type ExtendOptions = {
  defaultParams?: { [x: string]: {} | undefined } & Partial<ITableQuery>;
  customParams?: Record<string, unknown>;
  queryKey?: QueryKey;
  transform?: (params: Record<string, unknown>) => Record<string, unknown>;
  successMessage?: string;
  defaultToast?: boolean;
};

export type QueryModel = Record<
  string,
  | ((UseQueryOptions<any> | UseMutationOptions) & ExtendOptions)
  | ((payload: any) => (UseQueryOptions | UseMutationOptions) & ExtendOptions)
>;
