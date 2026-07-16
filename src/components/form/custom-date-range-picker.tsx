import React from 'react';
import { Form, DatePicker } from 'antd';

const { RangePicker } = DatePicker;
type RangePickerProps = React.ComponentProps<typeof RangePicker>;

interface CustomDateRangePickerProps extends Omit<RangePickerProps, 'name' | 'placeholder'> {
  label: string;
  name?: string | number | (string | number)[];
  required?: boolean;
  labelWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
  inputWidth?: number | string;
  placeholder?: [string, string];
  format?: string;
}

export const CustomDateRangePicker: React.FC<CustomDateRangePickerProps> = ({
  label,
  name,
  required,
  labelWidth = 100,
  layout = 'horizontal',
  format = 'DD-MM-YYYY',
  placeholder = ['Từ ngày', 'Đến ngày'],
  inputWidth = 170,
  style,
  ...rest
}) => {
  const isHorizontal = layout === 'horizontal';
  const widthStyle = typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth;

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required }]}
      required={required}
      help={null}
      className={isHorizontal ? 'custom-horizontal-item' : undefined}
      labelCol={isHorizontal ? {
        style: {
          width: widthStyle,
          flex: `0 0 ${widthStyle}`,
          maxWidth: widthStyle,
          textAlign: 'right',
          paddingRight: '8px',
          whiteSpace: 'nowrap',
          height: '18px',
        }
      } : undefined}
      wrapperCol={isHorizontal ? { 
        style: {
          flex: '1 1 auto'
        }
      } : undefined}
    >
      <RangePicker placeholder={placeholder} format={format} size="small" style={{ width: inputWidth, ...style, maxWidth: 192 }} {...rest} />
    </Form.Item>
  );
};

