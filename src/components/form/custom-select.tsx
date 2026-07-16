import React from 'react';
import { Form, Select } from 'antd';

type SelectProps = React.ComponentProps<typeof Select>;

interface CustomSelectProps extends Omit<SelectProps, 'name'> {
  label: string;
  name?: string | number | (string | number)[];
  required?: boolean;
  labelWidth?: number | string;
  inputWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  required,
  labelWidth = 100,
  layout = 'horizontal',
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
      <Select size="small" allowClear style={{ width: inputWidth }} {...rest} />
    </Form.Item>
  );
};