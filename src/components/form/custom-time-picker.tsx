import React from 'react';
import { Form, TimePicker } from 'antd';
import type { TimePickerProps } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// Mở rộng plugin cho dayjs để hỗ trợ parse định dạng giờ (Cực kỳ quan trọng)
dayjs.extend(customParseFormat);

export interface CustomTimePickerProps extends Omit<TimePickerProps, 'name'> {
  label: string;
  name: string | (string | number)[];
  required?: boolean;
  labelWidth?: number | string;
  layout?: 'horizontal' | 'vertical';
  inputWidth?: number | string;
}

export const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
  label,
  name, 
  required,
  placeholder = 'Chọn giờ...',
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
      <TimePicker
        size="small" // Cố định size nhỏ gọn theo phong cách Winform
        placeholder={placeholder}
        style={{ width: '100%', ...style }} // Mặc định giãn đầy cột (Col)
        // Mặc định focus vào 00:00:00 khi bật bảng chọn (nếu chưa có giá trị)
        defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} 
        {...rest}
      />
    </Form.Item>
  );
};