import React from 'react';
import { Form, InputNumber } from 'antd';

type InputNumberProps = React.ComponentProps<typeof InputNumber>;

interface CustomInputNumberProps extends Omit<InputNumberProps, 'name'> {
  label: string;
  name?: string | number | (string | number)[];
  required?: boolean;
  labelWidth?: number | string;
  inputWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
}

export const CustomInputNumber: React.FC<CustomInputNumberProps> = ({
  label,
  name,
  required,
  labelWidth = 100,
  layout = 'horizontal',
  inputWidth = 192,
  style,
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
      <InputNumber size="small" style={{ width: inputWidth }} {...rest} />
    </Form.Item>
  );
};
