import React from 'react';
import { Form, Input } from 'antd';
import type { PasswordProps } from 'antd/es/input';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export interface CustomPasswordProps extends Omit<PasswordProps, 'name'> {
  label: string;
  name?: string | number | (string | number)[];
  required?: boolean;
  labelWidth?: number | string;
  inputWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
}

export const CustomPassword: React.FC<CustomPasswordProps> = ({
  label,
  name,
  required,
  placeholder = 'Nhập mật khẩu...',
  labelWidth = 100,
  inputWidth = 170,
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
      rules={[{ required, message: `Vui lòng nhập ${label.toLowerCase()}` }]}
      className={isHorizontal ? 'custom-horizontal-item' : undefined}
      labelAlign="left"
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
      <Input.Password
        size="small"
        placeholder={placeholder}
        style={{ width: inputWidth, ...style }}
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        {...rest}
      />
    </Form.Item>
  );
};