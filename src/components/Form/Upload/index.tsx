import { PlusOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import type { FormItemProps, UploadProps } from 'antd';
import { Form, Upload } from 'antd';
import axios from 'axios';
import { useId } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

import HelperText from '../HelperText';

export interface UploadInputProps<TFormValues extends FieldValues> extends UploadProps {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  label?: string;
  className?: string;
  formItemProps?: FormItemProps;
  required?: boolean;
  helperText?: string;
}

const UploadInput = <TFormValues extends FieldValues>({
  label,
  className = '',
  control,
  name,
  formItemProps,
  required,
  helperText,
  ...props
}: UploadInputProps<TFormValues>) => {
  const id = useId();
  const { mutateAsync: uploadFile } = useMutation<
    { url: string; secure_url: string; original_filename: string; asset_id: string },
    unknown,
    { file: File }
  >({
    mutationFn: async (params) => {
      const url = `https://api.cloudinary.com/v1_1/hsuit/upload`;
      const fd = new FormData();
      fd.append('upload_preset', 'wgqbgjk7');
      fd.append('tags', 'browser_upload'); // Optional - add tags for image admin in Cloudinary
      fd.append('file', params.file);
      const { data } = await axios.post(url, fd);
      return data;
    },
  });

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    const file = newFileList[0];
    if (file && file.originFileObj) {
      field.onChange({ ...file, status: 'uploading', percent: 50 });
      uploadFile(
        { file: file.originFileObj },
        {
          onSuccess: (data) => {
            field.onChange({
              url: data.url,
              uid: data.asset_id,
              status: 'done',
              name: data.original_filename,
              type: 'IMAGE',
            });
          },
        },
      );
    }
  };

  return (
    <Form.Item
      className={className}
      colon={false}
      help={<HelperText error={error?.message} helperText={helperText} value={field.value} />}
      htmlFor={id}
      label={label}
      required={required}
      validateStatus={error ? 'error' : 'success'}
      {...formItemProps}
    >
      <Upload
        fileList={field.value ? [field.value] : []}
        listType="picture-card"
        onChange={handleChange}
        onRemove={() => field.onChange(null)}
        {...props}
      >
        {field.value ? null : uploadButton}
      </Upload>
    </Form.Item>
  );
};

export default UploadInput;
