import React from 'react';
import { Form, DatePicker } from 'antd';

type DatePickerProps = React.ComponentProps<typeof DatePicker>;

interface CustomDatePickerProps extends DatePickerProps {
  label: string;
  name: string;
  required?: boolean;
  labelWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  name,
  required,
  labelWidth = 100,
  layout = 'horizontal',
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
      <DatePicker size="small" style={{ width: '100%', ...style, maxWidth: 192 }} {...rest} />
    </Form.Item>
  );
};
