import React, { useState, useEffect } from 'react';
import { ConfigProvider, Form, Button, Typography, Space, App as AntdApp, Row, Col, Switch } from 'antd';
 import type { Dayjs } from 'dayjs';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { ultraCompactWinformTheme } from './theme/themeConfig';  
  
// Form import
import { CustomInput } from './components/form/custom-input'; 
import { CustomSelect } from './components/form/custom-select';
import { CustomDatePicker } from './components/form/custom-date-picker';
import { CustomDateRangePicker } from './components/form/custom-date-range-picker';
import { CustomInputNumber } from './components/form/custom-input-number';
import { CustomRadioGroup } from './components/form/custom-radio-group';
import { CustomCheckboxGroup } from './components/form/custom-checkbox-group';
import { CustomSwitch } from './components/form/custom-switch';

// Modal imports
import { BaseModal } from './components/modal/base-modal';
import { FormModal } from './components/modal/form-modal';
import { MessageBox, setStaticModal } from './components/modal/message-box';
import { CustomPopconfirm } from './components/modal/custom-popconfirm'; 
import { CustomUpload } from './components/form/custom-upload';
import { CustomTextArea } from './components/form/custom-textarea';
import { CustomLayout } from './components/layout/dashboard-layout-custom';
import { EmployeeList } from './components/table/employee-list';
import StepCustom from './components/step/step-custom';
import { CustomTabs } from './components/tab/custom-tab';
import { CustomTransfer } from './components/form/custom-transfer';
import { CustomAutoComplete } from './components/form/custom-auto-complete';
import { CustomFormRepeater } from './components/form/custom-form-repeater';
import { CustomCalendar, type CalendarEvent } from './components/calendar/custom-notice-calendar';
import { CustomMiniCalendar } from './components/calendar/custom-card-calendar';

const { Title } = Typography;

const AppContent: React.FC = () => {
  const [form] = Form.useForm();
  const [modalForm] = Form.useForm();
  
  const topMenuItems = [
    {
      key: '1',
      label: 'Hệ thống',
      children: [
        { key: '1.1', label: 'Cấu hình kí số' },
        { key: '1.2', label: 'Danh mục', children: [
          { key: '1.2.1', label: 'Nghề nghiệp' },
          { key: '1.2.2', label: 'Nhóm máu' },
          { key: '1.2.3', label: 'Phân loại thể lực' },
          { key: '1.2.4', label: 'Răng - Hàm - Mặt' },
          { key: '1.2.5', label: 'Chỉ số xét nghiệm' },
        ] },
        {
         key: '1.3', label: 'Phân quyền',
         children: [
          { key: '1.3.1', label: 'Quản lý đơn vị' },
          { key: '1.3.2', label: 'Quản lý đợt khám' },
          { key: '1.3.3', label: 'Quản lý bệnh nhân' },
         ]
        }, 
        { key: '1.4', label: 'Import dữ liệu' }, 
        { key: '1.5', label: 'Xuất dữ liệu liên thông' },  
        { key: '1.6', label: 'Cấu hình kí số' },  
      ],
    },
    {
      key: '2',
      label: 'Nghiệp vụ',
       children: [
        { key: '2.1', label: 'Khám sức khỏe' },]
    },
    {
      key: '3',
      label: 'Trợ giúp',
    },
  ];

  // 2. Dữ liệu Menu dọc
  const sideMenuItems = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `Danh mục ${key}`,
      children: Array.from({ length: 3 }).map((_, j) => {
        const subKey = index * 3 + j + 1;
        return {
          key: subKey,
          label: `Màn hình ${subKey}`,
        };
      }),
    };
  });

  // 3. Đường dẫn Breadcrumb
  const breadcrumbs = [
    { title: 'Trang chủ' },
    { title: 'Danh mục 1' },
    { title: 'Màn hình 1' }
  ];

  // Register context-aware modal instance
  const { modal } = AntdApp.useApp();
  useEffect(() => {
    setStaticModal(modal);
  }, [modal]);

  // Modal visibility states
  const [isBaseOpen, setIsBaseOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

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

  const myEvents: CalendarEvent[] = [
    { date: '2026-06-08', type: 'warning', content: 'Họp giao ban' },
    { date: '2026-06-08', type: 'success', content: 'Gặp khách hàng' },
    { date: '2026-06-10', type: 'error', content: 'Deadline dự án A' },
    { date: '2026-06-15', type: 'processing', content: 'Sự kiện công ty' },
  ];

  const myMonthNotes = [
    { 
      month: '2026-06', 
      content: (
        <>
          <section style={{ fontWeight: 'bold', color: '#1890ff' }}>1394</section>
          <span style={{ fontSize: 12 }}>Backlog number</span>
        </>
      ) 
    }
  ];

  const handlePanelChange = (value: Dayjs, mode: string) => {
    console.log('Tháng/Năm thay đổi:', value.format('YYYY-MM-DD'), 'Chế độ:', mode);
  };

  const handleSelect = (date: Dayjs) => {
    console.log('Bạn vừa click vào ngày:', date.format('YYYY-MM-DD'));
  };

  return (
    <CustomLayout 
      topMenu={{
        items: topMenuItems,
        defaultSelectedKeys: ['1'],
        onClick: (e) => console.log('Top menu clicked', e.key),
      }}
      sideMenu={{
        items: sideMenuItems,
        defaultSelectedKeys: ['1'],
        defaultOpenKeys: ['sub1'],
        onClick: (e) => console.log('Side menu clicked', e.key),
      }}
      breadcrumbItems={breadcrumbs}
    >
      
     <div style={{  textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <Title level={3} style={{ margin: 0 }}>Test Bộ UI Component (Form)</Title>
          <Space align="center" style={{ background: '#f5f5f5', padding: '4px 12px', borderRadius: 4, border: '1px solid #d9d9d9' }}>
            <span style={{ fontSize: 12, fontWeight: 500 }}>Disable toàn bộ Form:</span>
            <Switch checked={formDisabled} onChange={setFormDisabled} size="small" />
          </Space>
        </div>
         
        <CustomTabs
          items={[
            {
              key: '1',
              label: 'Thông tin nhân viên',
              children: (
                <Form 
                  form={form} 
                  layout="vertical" 
                  labelAlign="left" 
                  onFinish={handleFinish} 
                  disabled={formDisabled}
                > 
                  {/* Đã thêm justify="start" để dồn lưới về bên trái */}
                  <Row gutter={[4, 4]} justify="start">
                    <Col span={6}>
                      <CustomInput 
                        label="Mã nhân viên" 
                        name="empCode" 
                        required 
                        style={{ width: '100%' }}
                      /> 
                    </Col>
                    
                    <Col span={6}>
                      <CustomAutoComplete
                        label="Tìm kiếm"
                        name="searchCity"
                        options={[
                          { value: 'Hà Nội' },
                          { value: 'TP. Hồ Chí Minh' },
                          { value: 'Đà Nẵng' },
                          { value: 'Hải Phòng' },
                          { value: 'Cần Thơ' },
                        ]}
                        placeholder="Nhập tỉnh/thành..."
                      />
                    </Col>

                    <Col span={6}>
                      <CustomInputNumber
                        label="Tuổi"
                        name="age"
                        required
                        type='number'
                        style={{ width: '100%' }}
                      />
                    </Col>
                    
                    <Col span={6}>
                      <CustomSelect
                        label="Trạng thái"
                        name="status"
                        required
                        options={selectOptions}
                        style={{ width: '100%' }}
                      />
                    </Col>

                    <Col span={6}>
                      <CustomDatePicker
                        label="Ngày sinh"
                        name="birthday"
                        required
                        style={{ width: '100%' }}
                      />
                    </Col>
                    
                    <Col span={6}>
                      <CustomDateRangePicker
                        label="Thời gian làm"
                        name="workPeriod"
                        required
                        style={{ width: '100%' }}
                      />
                    </Col>
         
                    <Col span={12}>
                      <CustomTextArea
                        label="Ghi chú nghiệp vụ Ghi chú nghiệp vụ" 
                        name="notes" 
                        inputWidth={"100%"}
                        maxLength={1000} 
                      />
                    </Col> 
                    <Col span={6}>
                      <CustomRadioGroup
                        label="Giới tính"
                        name="gender"
                        required
                        options={[
                          { label: 'Nam', value: 'male' },
                          { label: 'Nữ', value: 'female' },
                        ]}
                      />
                    </Col>
                    
                    <Col span={6}>
                      <CustomCheckboxGroup
                        label="Sở thích"
                        name="hobbies"
                        options={[
                          { label: 'Thể thao', value: 'sports' }, 
                          { label: 'Âm nhạc', value: 'music' },
                        ]}
                      />
                    </Col>

                    <Col span={6}>
                      <CustomSwitch
                        label="Kích hoạt"
                        name="isActive"
                      />
                    </Col>
                    
                    <Col span={6}>
                      <CustomUpload 
                        label="Hợp đồng" 
                        name="contractFile" 
                        required 
                        maxSizeMB={2}
                        allowedExts={['.pdf', '.docx']}
                        btnText="Browse..."
                      />
                    </Col>
                     
                     
                    <Col span={18} style={{ marginTop: 12 }}>
                      <div style={{ marginBottom: 8, fontWeight: 'bold', fontSize: 13, }}>
                        Lịch sử công tác (Danh sách)
                      </div>
                      <CustomFormRepeater
                        name="workHistory"
                        itemTitle="Kinh nghiệm"
                        addText="Thêm kinh nghiệm làm việc"
                        variant="card"
                      >
                        {(field) => (
                          <Row gutter={[4, 4]}>
                            <Col span={12}>
                              <CustomInput
                                label="Công ty"
                                name={[field.name, 'company']}
                                required
                                style={{ width: '100%' }}
                              />
                            </Col>
                            <Col span={12}>
                              <CustomInput
                                label="Chức vụ"
                                name={[field.name, 'position']}
                                required
                                style={{ width: '100%' }}
                              />
                            </Col>
                          </Row>
                        )}
                      </CustomFormRepeater>
                    </Col>
                  </Row>

                  {/* Đã thêm textAlign: 'left' vào Form.Item và justify="start" vào Space */}
                  <Form.Item style={{ marginTop: 16, marginBottom: 0, textAlign: 'left' }}>
                    <Space wrap style={{ width: '100%', justifyContent: 'flex-start' }}>
                      <Button type="primary" htmlType="submit" size='small' disabled={formDisabled}>
                        Lưu Dữ Liệu
                      </Button>
                      <Button type="primary" danger size="small" disabled={formDisabled}>
                        Hủy Bỏ
                      </Button>
                      <Button type="dashed" size='small' disabled={formDisabled}>
                        Thêm Mới
                      </Button>
                      <Button type="text" size='small' disabled={formDisabled}>
                        Chi tiết
                      </Button>
                      <Button type="link" size='small' disabled={formDisabled}>
                        Đọc thêm
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              )
            },
            {
              key: '2',
              label: 'Cấu hình nâng cao',
              children: (
                <>
                  <CustomCalendar 
                    events={myEvents} 
                    monthNotes={myMonthNotes} 
                    mode="month" 
                    fullscreen={true}
                    onSelect={(date) => console.log('Đã chọn ngày:', date.format('YYYY-MM-DD'))}
                  />
                  <div style={{ marginTop: 12 }}>
                    <CustomMiniCalendar
                      width={320}
                      bordered={true}
                      onPanelChange={handlePanelChange}
                      onSelect={handleSelect}
                    />
                  </div>
                </>
              )
            }
          ]}
        />
        <CustomTransfer
          label="Quyền hạn"
          name="permissions"
          disabled={formDisabled}
          dataSource={[ 
            { key: '1', title: 'Quyền xem báo cáo' },
            { key: '2', title: 'Quyền sửa nhân viên' },
            { key: '3', title: 'Quyền xóa nhân viên' },
          ]}
        />
        <Title level={3} style={{ marginBottom: 16 }}>Test Bộ Modal & Popups</Title>
        
        <Space direction="horizontal" size="small" wrap style={{ width: '100%', justifyContent: 'flex-start' }}>
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
        <Title level={3} style={{ marginBottom: 16 }}>Test Bộ Step</Title>
        <StepCustom />
        <Title level={3} style={{ marginBottom: 16 }}>Test Bộ table</Title>
        <EmployeeList/>
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
    </CustomLayout>
    
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