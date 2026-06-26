import React from 'react';
import { Form, Checkbox } from 'antd';

type CheckboxGroupProps = React.ComponentProps<typeof Checkbox.Group>;

interface CustomCheckboxGroupProps extends CheckboxGroupProps {
  label: string;
  name: string;
  required?: boolean;
  labelWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
}

export const CustomCheckboxGroup: React.FC<CustomCheckboxGroupProps> = ({
  label,
  name,
  required,
  labelWidth = 100,
  layout = 'horizontal',
  ...rest
}) => {
  const isHorizontal = layout === 'horizontal';
  const widthStyle = typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth;

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, message: `Vui lòng chọn ít nhất một ${label.toLowerCase()}` }]}
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
      <Checkbox.Group {...rest} />
    </Form.Item>
  );
};
