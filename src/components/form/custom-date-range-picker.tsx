import React from 'react';
import { Form, DatePicker } from 'antd';

const { RangePicker } = DatePicker;
type RangePickerProps = React.ComponentProps<typeof RangePicker>;

interface CustomDateRangePickerProps extends Omit<RangePickerProps, 'name'> {
  label: string;
  name?: string | number | (string | number)[];
  required?: boolean;
  labelWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
  format?: string;
}

export const CustomDateRangePicker: React.FC<CustomDateRangePickerProps> = ({
  label,
  name,
  required,
  labelWidth = 100,
  layout = 'horizontal',
  format = 'DD-MM-YYYY',
  style,
  ...rest
}) => {
  const isHorizontal = layout === 'horizontal';
  const widthStyle = typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth;

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, message: `Vui lòng chọn ${label.toLowerCase()}` }]}
      className={isHorizontal ? 'custom-horizontal-item' : undefined}
      labelCol={isHorizontal ? {
        style: {
          width: widthStyle,
          flex: `0 0 ${widthStyle}`,
          maxWidth: widthStyle,
          textAlign: 'right',
          paddingRight: '8px',
          whiteSpace: 'nowrap'
        }
      } : undefined}
      wrapperCol={isHorizontal ? { 
        style: {
          flex: '1 1 auto'
        }
      } : undefined}
    >
      <RangePicker format={format} size="small" style={{ width: '100%', ...style, maxWidth: 192 }} {...rest} />
    </Form.Item>
  );
};
