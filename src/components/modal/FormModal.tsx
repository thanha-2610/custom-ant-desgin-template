import React from 'react';
import { Form } from 'antd';
import type { FormInstance, FormProps } from 'antd';
import { BaseModal } from './BaseModal';
import type { BaseModalProps } from './BaseModal';

interface FormModalProps extends Omit<BaseModalProps, 'onOk'> {
  form: FormInstance;
  onFinish: FormProps['onFinish'];
  formProps?: Omit<FormProps, 'form' | 'onFinish'>;
  children: React.ReactNode;
}

export const FormModal: React.FC<FormModalProps> = ({
  form,
  onFinish,
  formProps,
  children,
  okButtonProps,
  ...rest
}) => {
  return (
    <BaseModal
      {...rest}
      onOk={() => form.submit()}
      okButtonProps={{
        htmlType: 'submit',
        ...okButtonProps,
      }}
    >
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        {...formProps}
      >
        {children}
      </Form>
    </BaseModal>
  );
};
