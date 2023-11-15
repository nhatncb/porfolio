import type { DatePickerProps } from 'antd';
import { DatePicker as AntdDatePicker, Form } from 'antd';
import dayjs from 'dayjs';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { DateFormat } from 'utils/constants';

export interface DateInputProps<TFormValues extends FieldValues> {
  label?: string;
  className?: string;
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  format?: string;
  required?: boolean;
}

const DateInput = <TFormValues extends FieldValues>({
  label,
  name,
  className = '',
  format = DateFormat.YEAR_MONTH_DATE_DASH,
  control,
  required,
  ...props
}: DateInputProps<TFormValues> & DatePickerProps) => {
  const {
    field: { value, onChange, ...otherFields },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleOnChange: DatePickerProps['onChange'] = (date) => {
    onChange(date ? date.toISOString() : null);
  };

  return (
    <Form.Item
      className={className}
      colon={false}
      help={error?.message}
      label={label}
      required={required}
      validateStatus={error ? 'error' : 'success'}
    >
      <AntdDatePicker
        format={format}
        inputReadOnly={true}
        onChange={handleOnChange}
        value={value ? dayjs(value) : null}
        {...otherFields}
        {...props}
      />
    </Form.Item>
  );
};

export default DateInput;
