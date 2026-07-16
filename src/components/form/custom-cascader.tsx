import React from 'react';
import { Form, Cascader } from 'antd';
import type { CascaderProps } from 'antd';

export interface CustomCascaderProps extends Omit<CascaderProps<any>, 'name'> {
  label: string;
  name: string | (string | number)[];
  required?: boolean;  
  labelWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
  inputWidth?: number | string;
}

export const CustomCascader: React.FC<CustomCascaderProps> = ({
  label,
  name,
  required,
  placeholder = 'Vui lòng chọn...',
  layout = 'horizontal',
  labelWidth = 100,
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
        <Cascader
            size="small"
            placeholder={placeholder}
            style={{ width: '100%', ...style }}
            showSearch={{
            filter: (inputValue, path) =>
                path.some(
                (option) =>
                    (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1
                ),
            }}
            {...(rest as any)} 
        />
        </Form.Item>
    );
};