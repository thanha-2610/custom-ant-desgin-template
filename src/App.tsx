import React, { useState, useEffect } from 'react';
import { ConfigProvider, Form, Button, Typography, Space, App as AntdApp } from 'antd';

import { ultraCompactWinformTheme } from './theme/themeConfig';  
import { CustomInput } from './components/form/CustomInput'; 
import { CustomSelect } from './components/form/CustomSelect';
import { CustomDatePicker } from './components/form/CustomDatePicker';
import { CustomDateRangePicker } from './components/form/CustomDateRangePicker';
import { CustomInputNumber } from './components/form/CustomInputNumber';
import { CustomRadioGroup } from './components/form/CustomRadioGroup';
import { CustomCheckboxGroup } from './components/form/CustomCheckboxGroup';
import { CustomSwitch } from './components/form/CustomSwitch';

// Modal imports
import { BaseModal } from './components/modal/BaseModal';
import { FormModal } from './components/modal/FormModal';
import { MessageBox, setStaticModal } from './components/modal/MessageBox';
import { CustomPopconfirm } from './components/modal/CustomPopconfirm'; 
import { CustomUpload } from './components/form/CustomUpload';
import { CustomTextArea } from './components/form/CustomTextArea';

const { Title } = Typography;

const AppContent: React.FC = () => {
  const [form] = Form.useForm();
  const [modalForm] = Form.useForm();
  
  // Register context-aware modal instance
  const { modal } = AntdApp.useApp();
  useEffect(() => {
    setStaticModal(modal);
  }, [modal]);

  // Modal visibility states
  const [isBaseOpen, setIsBaseOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFinish = (values: unknown) => {
    console.log('Dữ liệu lưu:', values);
  };

  const handleModalFormFinish = (values: Record<string, unknown>) => {
    console.log('Dữ liệu Modal Form:', values);
    MessageBox.success(`Form gửi thành công: ${JSON.stringify(values)}`, 'Thông báo');
    setIsFormOpen(false);
    modalForm.resetFields();
  };

  const selectOptions = [
    { value: 'active', label: 'Hoạt động' },
    { value: 'inactive', label: 'Ngừng hoạt động' },
  ];

  return (
    <div style={{ padding: '24px', background: '#f0f0f0', minHeight: '100vh', textAlign: 'left' }}>
      <div style={{ background: '#fff', padding: '8px', border: '1px solid #d9d9d9', marginBottom: '8px' }}>
        
        <Title level={3} style={{ marginBottom: 16 }}>Test Bộ UI Component (Form)</Title>
        
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Space direction="horizontal" size="small">
              <CustomInput 
                label="Mã nhân viên" 
                name="empCode" 
                required   
              /> 
              
              <CustomInput 
                label="Họ và tên" 
                name="empName" 
                required 
                style={{ width: 250 }} 
              />
            </Space>

            <Space direction="horizontal" >
              <CustomInputNumber
                label="Tuổi"
                name="age"
                required
                style={{ width: 200 }}
              />
              <CustomSelect
                label="Trạng thái"
                name="status"
                required
                options={selectOptions}
                style={{ width: 250 }}
              />
            </Space>

            <Space direction="horizontal" size="small">
              <CustomDatePicker
                label="Ngày sinh"
                name="birthday"
                required
                style={{ width: 200 }}
              />
              <CustomDateRangePicker
                label="Thời gian làm"
                name="workPeriod"
                required
                style={{ width: 250 }}
              />
            </Space>
            {/* Khung nhập text đa dòng */}
            <CustomTextArea
              label="Ghi chú nghiệp vụ" 
              name="notes" 
              maxLength={1000} // 1000 ký tự
            />
            <Space direction="horizontal" size="small">
              <CustomRadioGroup
                label="Giới tính"
                name="gender"
                required
                options={[
                  { label: 'Nam', value: 'male' },
                  { label: 'Nữ', value: 'female' },
                ]}
                style={{ width: 200 }}
              />
              <CustomCheckboxGroup
                label="Sở thích"
                name="hobbies"
                options={[
                  { label: 'Thể thao', value: 'sports' },
                  { label: 'Âm nhạc', value: 'music' },
                ]}
                style={{ width: 250 }}
              />
            </Space>
            <Space direction="horizontal" size="small">
              <div style={{ width: 292 }}>
                <CustomSwitch
                  label="Kích hoạt"
                  name="isActive"
                />
              </div>

              {/* Khung tải file */}
              <CustomUpload 
                label="Hợp đồng" 
                name="contractFile" 
                required 
                maxSizeMB={2} // Tối đa 2MB
                allowedExts={['.pdf', '.docx']} // Chỉ nhận PDF và Word
                btnText="Browse..."
              />
            </Space>
          </Space>

          <Form.Item style={{ marginTop: 16, marginBottom: 0 }}>
            <Space wrap>
              {/* 1. Nút Chính (Primary): Dùng cho hành động quan trọng nhất (Lưu, Gửi) */}
              <Button type="primary" htmlType="submit" size='small'>
                Lưu Dữ Liệu
              </Button>

              {/* 2. Nút Mặc Định (Default): Dùng cho các hành động phụ (Hủy, Quay lại) */}
              <Button type="default" size='small'>
                Hủy Bỏ
              </Button>

              {/* 3. Nút Nét Đứt (Dashed): Thường dùng để thêm mới item (Thêm dòng, Thêm file) */}
              <Button type="dashed" size='small'>
                Thêm Mới
              </Button>

              {/* 4. Nút Dạng Chữ (Text): Nhìn như text thường nhưng có hiệu ứng hover */}
              <Button type="text" size='small'>
                Chi tiết
              </Button>

              {/* 5. Nút Đường Dẫn (Link): Nhìn giống thẻ <a>, dùng để chuyển trang/mở link */}
              <Button type="link" size='small'>
                Đọc thêm
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>

      <div style={{ background: '#fff', padding: '8px', border: '1px solid #d9d9d9' }}>
        <Title level={3} style={{ marginBottom: 16 }}>Test Bộ Modal & Popups</Title>
        
        <Space direction="horizontal" size="small" wrap>
          <Button size="small" onClick={() => setIsBaseOpen(true)}>
            Open Base Modal
          </Button>

          <Button size="small" onClick={() => setIsFormOpen(true)}>
            Open Form Modal
          </Button>

          <Button size="small" onClick={() => MessageBox.info('Đây là hộp thoại thông tin của hệ thống.', 'Thông tin')}>
            Show MessageBox.info
          </Button>

          <Button 
            size="small" 
            onClick={() => {
              MessageBox.confirm(
                'Bạn có chắc chắn muốn thực hiện hành động này không?',
                'Xác nhận hệ thống',
                () => { MessageBox.success('Đã xác nhận thành công!'); },
                () => { console.log('Đã huỷ bỏ'); }
              );
            }}
          >
            Show MessageBox.confirm
          </Button>

          <CustomPopconfirm
            title="Xóa dữ liệu"
            description="Bạn có chắc chắn muốn xóa bản ghi này?"
            onConfirm={() => { MessageBox.success('Bản ghi đã được xóa.'); }}
          >
            <Button size="small" danger>
              Custom Popconfirm
            </Button>
          </CustomPopconfirm>
        </Space>
      </div>

      {/* Base Modal Test */}
      <BaseModal
        title="Base Modal Test"
        open={isBaseOpen}
        onOk={() => setIsBaseOpen(false)}
        onCancel={() => setIsBaseOpen(false)}
      >
        <p>Đây là nội dung hiển thị bên trong Base Modal.</p>
        <p>Component này giữ nguyên thiết kế và các thuộc tính tiêu chuẩn của Ant Design nhưng có tuỳ chỉnh kích thước các nút nhỏ gọn hơn theo theme winform.</p>
      </BaseModal>

      {/* Form Modal Test */}
      <FormModal
        title="Form Modal Test"
        open={isFormOpen}
        form={modalForm}
        onFinish={handleModalFormFinish}
        onCancel={() => {
          setIsFormOpen(false);
          modalForm.resetFields();
        }}
      >
        <CustomSelect
          label="Trạng thái"
          name="status"
          required
          options={selectOptions}
          style={{ width: '100%' }}
        />
        <CustomInput 
          label="Tên tài khoản" 
          name="username" 
          required 
          style={{ width: '100%' }}
        />
        <CustomInput 
          label="Mật khẩu" 
          name="password" 
          type="password"
          required 
          style={{ width: '100%' }}
        />
      </FormModal>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ConfigProvider theme={ultraCompactWinformTheme}>
      <AntdApp>
        <AppContent />
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
