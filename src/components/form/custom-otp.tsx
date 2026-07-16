import React from 'react';
import { Form, Input } from 'antd';
import type { GetProps } from 'antd';
 
type OTPProps = GetProps<typeof Input.OTP>;

export interface CustomOTPProps extends Omit<OTPProps, 'name'> {
  label: string;
  name?: string | number | (string | number)[];
  required?: boolean;
  labelWidth?: number | string;
  inputWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
}

export const CustomOTP: React.FC<CustomOTPProps> = ({
  label,
  name,
  required,
  labelWidth = 100,
  layout = 'horizontal',
  style,
  inputWidth = 170,
  length = 6, 
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
          paddingRight: '4px',
          whiteSpace: 'nowrap'
        }
      } : undefined}
      wrapperCol={isHorizontal ? {
        style: {
          flex: '1 1 auto'
        }
      } : undefined}
    >
      <Input.OTP 
        size="small" // Kích thước nhỏ chuẩn Winform
        length={length} 
        style={{ ...style, width: inputWidth }} 
        {...rest} 
      />
    </Form.Item>
  );
};