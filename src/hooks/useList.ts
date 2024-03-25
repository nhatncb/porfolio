import type { UseQueryOptions } from '@tanstack/react-query';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { TablePaginationConfig } from 'antd';
import type { FirestoreDataConverter, QueryDocumentSnapshot, Timestamp } from 'firebase/firestore';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import type { ExtendOptions, IListQuery } from 'hooks/types';
import { db } from 'utils/firebase';

import useSearch from './useSearch';
import { getSortString, tableQuerySchema } from './utils';

interface DatabaseType {
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}
interface LocalType {
  createdAt?: string;
  updatedAt?: string;
}

const genericConverter = <T>(): FirestoreDataConverter<T & LocalType> => ({
  toFirestore: (item) => item,
  fromFirestore: (snapshot: QueryDocumentSnapshot<T & DatabaseType>, options) => {
    const data = snapshot.data(options);
    return {
      ...data,
      createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : undefined,
      updatedAt: data.updatedAt ? data.updatedAt.toDate().toISOString() : undefined,
    };
  },
});

interface Options<TQueryFnData = unknown, TData = TQueryFnData, TError = unknown>
  extends Omit<UseQueryOptions<any[], TError, TData[], unknown[]>, 'queryFn' | 'queryKey'>,
    ExtendOptions {
  collectionName: string;
  order?: 'desc' | 'asc';
}

const useList = <TQueryFnData = unknown, TData = TQueryFnData, TError = unknown>(
  options: Options<TQueryFnData, TData, TError>,
) => {
  const {
    queryKey,
    collectionName,
    customParams,
    transform,
    defaultParams,
    order = 'desc',
    ...otherOptions
  } = options;
  const { query: searchParams } = useSearch({
    schema: tableQuerySchema,
    defaultValues: defaultParams,
  });
  const params = {
    ...defaultParams,
    ...searchParams,
    ...customParams, // Do not change the order. Please pass another param if you want to override the params
  };

  const formatParams = (_params: IListQuery<unknown>) => {
    const formattedParams = { ..._params };
    if (formattedParams.orderBy && formattedParams.order) {
      formattedParams.sort = getSortString(formattedParams.orderBy, formattedParams.order);
      delete formattedParams.order;
      delete formattedParams.orderBy;
    }
    if (transform) {
      return transform(formattedParams);
    }
    return formattedParams;
  };

  const formattedParams = formatParams(params);
  const { data, isFetching, refetch, isLoading } = useQuery({
    queryKey: queryKey ? [...queryKey, formattedParams] : [collectionName, formattedParams],
    queryFn: async () => {
      const snapshot = await getDocs(
        query(
          collection(db, collectionName),
          orderBy('createdAt', order),
          // where('createdAt', '<', date),
          limit(200),
        ).withConverter(genericConverter()),
      );
      return snapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
    },
    placeholderData: keepPreviousData,
    ...otherOptions,
  });

  const pagination: TablePaginationConfig = {
    showSizeChanger: true,
    pageSize: data?.length || 10,
    current: 1,
    total: data?.length || 0,
    showTotal: (total, range) => `${range[0]}-${range[1]}/${total}`,
  };

  return {
    list: data || [],
    total: data?.length || 0,
    isLoading,
    isFetching,
    pagination,
    refetch,
  };
};
export default useList;
