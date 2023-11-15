import { DatePicker, Form } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface DatePickerFieldProps<TFormValues extends FieldValues> {
  label?: string;
  className?: string;
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  required?: boolean;
}

const { RangePicker } = DatePicker;

const RangeDateInput = <TFormValues extends FieldValues>({
  label,
  name,
  className = '',
  control,
  required,
  ...props
}: DatePickerFieldProps<TFormValues> & RangePickerProps) => {
  const {
    field: { value, onChange, ...otherFields },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleOnChange: RangePickerProps['onChange'] = (rangeValue) => {
    onChange(rangeValue ? [rangeValue[0]?.toISOString(), rangeValue[1]?.toISOString()] : null);
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
      <RangePicker
        inputReadOnly={true}
        onChange={handleOnChange}
        value={value?.length > 0 ? [dayjs(value[0]), dayjs(value[1])] : null}
        {...otherFields}
        {...props}
      />
    </Form.Item>
  );
};

export default RangeDateInput;
