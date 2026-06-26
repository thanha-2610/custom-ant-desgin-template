import React from 'react';
import { Form, Switch } from 'antd';

type SwitchProps = React.ComponentProps<typeof Switch>;

interface CustomSwitchProps extends SwitchProps {
  label: string;
  name: string;
  required?: boolean;
  labelWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
}

export const CustomSwitch: React.FC<CustomSwitchProps> = ({
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
      valuePropName="checked"
      rules={[{ required, message: `Vui lòng bật ${label.toLowerCase()}` }]}
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
      <Switch size="small" {...rest} />
    </Form.Item>
  );
};
