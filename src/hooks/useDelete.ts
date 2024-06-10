import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from 'utils/firebase';
import type { ExtendOptions } from 'utils/types';

// eslint-disable-next-line unused-imports/no-unused-vars
interface Options<TVariables, TError>
  extends Omit<UseMutationOptions<TVariables, TError, TVariables>, 'mutationFn' | 'meta'>,
    ExtendOptions {
  collectionName: string;
  id: string;
}

const useDelete = <TVariables = unknown, TError = unknown>(
  options: Options<TVariables, TError>,
) => {
  const { defaultToast, successMessage, collectionName, id, ...otherOptions } = options;

  return useMutation({
    mutationFn: async (params: TVariables) => {
      await deleteDoc(doc(db, collectionName, id));
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

export default useDelete;
