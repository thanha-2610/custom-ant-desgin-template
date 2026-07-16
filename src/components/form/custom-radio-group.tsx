import React from 'react';
import { Form, Radio } from 'antd';

type RadioGroupProps = React.ComponentProps<typeof Radio.Group>;

interface CustomRadioGroupProps extends Omit<RadioGroupProps, 'name'> {
  label: string;
  name?: string | number | (string | number)[];
  required?: boolean;
  labelWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
}

export const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
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
      <Radio.Group size="small" {...rest}  style={{ fontSize: 13 }}/>
    </Form.Item>
  );
};
