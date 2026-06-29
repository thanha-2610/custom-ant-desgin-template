import React from 'react';
import { Form, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

interface CustomUploadProps extends Omit<UploadProps, 'fileList' | 'name'> {
  label: string;
  name?: string | number | (string | number)[];
  required?: boolean;
  maxSizeMB?: number;
  allowedExts?: string[];
  btnText?: string; 
  maxWidth?: string | number;  
}

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const CustomUpload: React.FC<CustomUploadProps> = ({
  label,
  name,
  required,
  maxSizeMB = 5,
  allowedExts,  
  btnText = 'Chọn file...',
  maxWidth = 192, // Lấy maxWidth từ props
  ...rest
}) => {
  const beforeUpload = (file: File) => {
    const isLtLimit = file.size / 1024 / 1024 < maxSizeMB;
    if (!isLtLimit) {
      message.error(`File quá lớn! Dung lượng tối đa là ${maxSizeMB}MB.`);
      return Upload.LIST_IGNORE;
    }

    if (allowedExts && allowedExts.length > 0) {
      const fileName = file.name.toLowerCase();
      const isAllowed = allowedExts.some((ext) => fileName.endsWith(ext.toLowerCase()));
      if (!isAllowed) {
        message.error(`Chỉ hỗ trợ các định dạng: ${allowedExts.join(', ')}`);
        return Upload.LIST_IGNORE;
      }
    }

    return false;
  };
  
  return (
    <Form.Item
      label={label}
      name={name}
      valuePropName="fileList"
      getValueFromEvent={normFile}
      rules={[{ required, message: `Vui lòng tải lên tài liệu cho: ${label.toLowerCase()}` }]}
 
    >
      {/* Bọc Upload trong một thẻ div và áp dụng maxWidth */}
      <div style={{ maxWidth: maxWidth || '100%' }}>
        <Upload
          beforeUpload={beforeUpload}
          maxCount={1}
          {...rest}
        >
          <Button size="small" icon={<UploadOutlined />}>
            {btnText}
          </Button>
        </Upload>
      </div>
    </Form.Item>
  );
};