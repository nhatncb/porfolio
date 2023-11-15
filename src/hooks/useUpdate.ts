import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { collection, doc, writeBatch } from 'firebase/firestore';
import { db } from 'utils/firebase';
import type { ExtendOptions } from 'utils/types';

// eslint-disable-next-line unused-imports/no-unused-vars
interface Options<TVariables, TError>
  extends Omit<UseMutationOptions<TVariables, TError, TVariables>, 'mutationFn' | 'meta'>,
    ExtendOptions {
  collectionName: string;
  id: string;
}

const useUpdate = <TVariables = unknown, TError = unknown>(
  options: Options<TVariables, TError>,
) => {
  const { defaultToast, successMessage, collectionName, id, ...otherOptions } = options;

  return useMutation({
    mutationFn: async (params: TVariables) => {
      const batch = writeBatch(db);
      const tableRef = doc(collection(db, collectionName), id);
      batch.update(tableRef, params as { [x: string]: any });
      await batch.commit();
      return params;
    },
    onSuccess: () => {
      if (defaultToast || successMessage) {
        notification.success({ message: successMessage || 'Successfully' });
      }
    },
    ...otherOptions,
  });
};

export default useUpdate;
