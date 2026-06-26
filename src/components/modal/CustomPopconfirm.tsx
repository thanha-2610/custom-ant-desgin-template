import React from 'react';
import { Popconfirm } from 'antd';
import type { PopconfirmProps } from 'antd';

export interface CustomPopconfirmProps extends PopconfirmProps {
  children: React.ReactNode;
}

export const CustomPopconfirm: React.FC<CustomPopconfirmProps> = ({
  children,
  okText = 'Đồng ý',
  cancelText = 'Hủy bỏ',
  okButtonProps,
  cancelButtonProps,
  ...rest
}) => {
  return (
    <Popconfirm
      okText={okText}
      cancelText={cancelText}
      okButtonProps={{ size: 'small', ...okButtonProps }}
      cancelButtonProps={{ size: 'small', ...cancelButtonProps }}
      {...rest}
    >
      {children}
    </Popconfirm>
  );
};
