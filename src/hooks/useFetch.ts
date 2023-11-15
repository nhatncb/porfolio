import type { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'utils/firebase';

import type { ExtendOptions } from './types';

interface Options<TQueryFnData = unknown, TData = TQueryFnData, TError = unknown>
  extends Omit<UseQueryOptions<TQueryFnData, TError, TData, QueryKey>, 'queryFn' | 'queryKey'>,
    ExtendOptions {
  queryKey: QueryKey;
  collectionName: string;
  id: string;
}

const useFetch = <TQueryFnData = unknown, TData = TQueryFnData, TError = unknown>(
  options: Options<TQueryFnData, TData, TError>,
) => {
  const { queryKey, collectionName, id, ...otherOptions } = options;

  return useQuery({
    queryKey,
    queryFn: async () => {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      return docSnap.data() as TQueryFnData;
    },
    ...otherOptions,
  });
};

export default useFetch;
