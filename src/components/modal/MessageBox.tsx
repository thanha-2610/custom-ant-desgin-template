import { Modal } from 'antd';
import type { ModalFuncProps } from 'antd';

type HookAPI = ReturnType<typeof Modal.useModal>[0];
type ModalInstanceType = HookAPI | typeof Modal;

let activeModal: ModalInstanceType = Modal;

export const setStaticModal = (modalInstance: HookAPI) => {
  activeModal = modalInstance;
};

export const MessageBox = {
  info: (content: string, title = 'Thông báo', props?: ModalFuncProps) => {
    return activeModal.info({
      title,
      content,
      okButtonProps: { size: 'small' },
      maskClosable: false,
      ...props,
    });
  },
  success: (content: string, title = 'Thành công', props?: ModalFuncProps) => {
    return activeModal.success({
      title,
      content,
      okButtonProps: { size: 'small' },
      maskClosable: false,
      ...props,
    });
  },
  warning: (content: string, title = 'Cảnh báo', props?: ModalFuncProps) => {
    return activeModal.warning({
      title,
      content,
      okButtonProps: { size: 'small' },
      maskClosable: false,
      ...props,
    });
  },
  error: (content: string, title = 'Lỗi', props?: ModalFuncProps) => {
    return activeModal.error({
      title,
      content,
      okButtonProps: { size: 'small' },
      maskClosable: false,
      ...props,
    });
  },
  confirm: (
    content: string,
    title = 'Xác nhận',
    onOk?: () => void | Promise<unknown>,
    onCancel?: () => void,
    props?: ModalFuncProps
  ) => {
    return activeModal.confirm({
      title,
      content,
      onOk,
      onCancel,
      okText: 'Đồng ý',
      cancelText: 'Hủy bỏ',
      okButtonProps: { size: 'small' },
      cancelButtonProps: { size: 'small' },
      maskClosable: false,
      ...props,
    });
  }
};

