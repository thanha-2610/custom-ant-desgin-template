import React from 'react';
import { Form, Transfer } from 'antd';
import type { TransferProps } from 'antd';
import type { FormItemProps } from 'antd/es/form/FormItem';

interface CustomTransferProps extends Omit<FormItemProps, 'children' | 'valuePropName'> {
  name?: string | number | (string | number)[];
  dataSource: TransferProps['dataSource'];
  targetKeys?: TransferProps['targetKeys'];
  selectedKeys?: TransferProps['selectedKeys'];
  onChange?: TransferProps['onChange'];
  onSelectChange?: TransferProps['onSelectChange'];
  onScroll?: TransferProps['onScroll'];
  render?: TransferProps['render'];
  disabled?: boolean;
  
  // Props để tùy chỉnh giao diện
  listStyle?: React.CSSProperties;  
}

export const CustomTransfer: React.FC<CustomTransferProps> = ({
  label,
  name,
  dataSource,
  targetKeys,
  selectedKeys,
  onChange,
  onSelectChange,
  onScroll,
  render,
  listStyle,
  disabled,
  required,
  ...rest
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required }]}
      {...rest}
    >
      <Transfer
        dataSource={dataSource}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
        render={render || ((item) => item.title || '')}
        listStyle={listStyle}
        disabled={disabled}
      />
    </Form.Item>
  );
};