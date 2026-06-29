import React from 'react';
import { Form, AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';

interface CustomAutoCompleteProps extends Omit<AutoCompleteProps, 'name'> {
  label: string;
  name?: string | number | (string | number)[];
  required?: boolean;
  labelWidth?: number | string;
  inputWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
}

export const CustomAutoComplete: React.FC<CustomAutoCompleteProps> = ({
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
      rules={[{ required, message: `Vui lòng nhập hoặc chọn ${label.toLowerCase()}` }]}
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
      <AutoComplete size="small" allowClear style={{ width: inputWidth }} {...rest} />
    </Form.Item>
  );
};