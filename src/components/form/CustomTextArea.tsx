// src/components/Form/CustomTextArea.tsx
import React from 'react';
import { Form, Input } from 'antd';
import type { TextAreaProps } from 'antd/es/input';

const { TextArea } = Input;

interface CustomTextAreaProps extends TextAreaProps {
  label: string;
  name: string;
  maxContent?: number;
  layout?: 'horizontal' | 'vertical';
  required?: boolean;
  labelWidth?: number | string;
  inputWidth?: number | string;
}

export const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  label,
  name,
  required,
  layout = 'horizontal',
  labelWidth = 100,
  maxContent = 500,
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
    >
      <TextArea
        size="small"
        allowClear
        autoSize={{ minRows: 2, maxRows: 5 }} 
        showCount
        maxLength={maxContent}
        style={{ fontSize: 11, width: inputWidth }} 
        {...rest}
      />
    </Form.Item>
  );
};


