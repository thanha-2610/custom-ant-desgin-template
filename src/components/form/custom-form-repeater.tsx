import React from 'react';
import { Form, Button, Card, Space } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';

export interface CustomFormRepeaterProps {
  name: string | (string | number)[];
  itemTitle?: string;
  addText?: string;
  variant?: 'card' | 'inline';
  children: (field: any, index: number) => React.ReactNode;
}

export const CustomFormRepeater: React.FC<CustomFormRepeaterProps> = ({
  name,
  itemTitle = 'Item',
  addText = 'Thêm mới',
  variant = 'card',
  children,
}) => {
  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: variant === 'card' ? 8 : 8 }}>
          {fields.map((field, index) => {
            if (variant === 'card') {
              return (
                <Card
                  size="small"
                  title={`${itemTitle} ${index + 1}`}
                  key={field.key}
                  style={{ background: '#fafafa', border: '1px solid #d9d9d9' }} 
                  extra={
                    <Button 
                      type="text" 
                      danger 
                      size="small"
                      icon={<CloseOutlined />} 
                      onClick={() => remove(field.name)} 
                    />
                  }
                >
                  {children(field, index)}
                </Card>
              );
            }

            return (
              <Space key={field.key} align="start" style={{ display: 'flex' }}>
                {children(field, index)}
                <Button
                  type="text"
                  danger
                  icon={<CloseOutlined />}
                  size="small"
                  onClick={() => remove(field.name)}
                />
              </Space>
            );
          })}

          <Button 
            type="dashed" 
            onClick={() => add()} 
            size="small"
            block 
            icon={<PlusOutlined />}
            style={{ borderColor: '#1890ff', color: '#1890ff' }}
          >
            {addText}
          </Button>
        </div>
      )}
    </Form.List>
  );
};