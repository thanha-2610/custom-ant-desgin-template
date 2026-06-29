import React from 'react';
import { Form, Input } from 'antd';
import type { InputProps } from 'antd';

interface CustomInputProps extends Omit<InputProps, 'name'> {
  label: string;
  name?: string | number | (string | number)[];
  required?: boolean;
  labelWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
  inputWidth?: number | string;
}

export const CustomInput: React.FC<CustomInputProps> = ({ 
  label, 
  name, 
  required, 
  labelWidth = 100,
  layout = 'horizontal',
  style,
  inputWidth = 192,
  ...rest 
}) => {
  const isHorizontal = layout === 'horizontal';
  const widthStyle = typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth;

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, message: `Vui lòng nhập ${label.toLowerCase()}` }]}
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
      <Input style={{ width: inputWidth }} size="small" allowClear {...rest} />
    </Form.Item>
  );
};
