import { Form, TimePicker } from 'antd';
import dayjs from 'dayjs';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface TimePickerFieldProps<TFormValues extends FieldValues> {
  label?: string;
  className?: string;
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  required?: boolean;
}

const { RangePicker } = TimePicker;

const TimeRangeInput = <TFormValues extends FieldValues>({
  label,
  name,
  className = '',
  control,
  required,
  ...props
}: TimePickerFieldProps<TFormValues> & any) => {
  const {
    field: { value, onChange, ...otherFields },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleOnChange = (rangeValue: any) => {
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
        format="HH:mm"
        inputReadOnly={true}
        onChange={handleOnChange}
        value={value?.length > 0 ? [dayjs(value[0]), dayjs(value[1])] : null}
        {...otherFields}
        {...props}
      />
    </Form.Item>
  );
};

export default TimeRangeInput;
