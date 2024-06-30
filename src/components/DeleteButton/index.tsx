import { DeleteOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import useDelete from 'hooks/useDelete';

const DeleteButton = ({
  collectionName,
  id,
  onSuccess,
}: {
  collectionName: string;
  id: string;
  onSuccess?: () => void;
}) => {
  const { mutateAsync: deleteDoc, isPending } = useDelete({ collectionName, id });

  const handleDelete = () => {
    Modal.confirm({
      content: 'Are you sure to delete this document?',
      onOk: () =>
        deleteDoc(null, {
          onSuccess: () => {
            if (onSuccess) {
              onSuccess();
            }
            Modal.destroyAll();
          },
        }),
    });
  };

  return (
    <Button
      danger
      icon={<DeleteOutlined />}
      loading={isPending}
      onClick={handleDelete}
      size="small"
    ></Button>
  );
};

export default DeleteButton;
