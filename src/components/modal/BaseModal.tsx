import React from 'react';
import { Modal } from 'antd';
import type { ModalProps } from 'antd';

export interface BaseModalProps extends ModalProps {
  children: React.ReactNode;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  children,
  okButtonProps,
  cancelButtonProps,
  width = 500,
  maskClosable = false,
  ...rest
}) => {
  return (
    <Modal
      width={width}
      maskClosable={maskClosable}
      okButtonProps={{ size: 'small', ...okButtonProps }}
      cancelButtonProps={{ size: 'small', ...cancelButtonProps }}
      {...rest}
    >
      <div style={{ fontSize: '12px' }}>{children}</div>
    </Modal>
  );
};
