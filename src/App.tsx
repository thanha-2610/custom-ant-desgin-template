import React, { useState, useEffect } from "react";
import {
  ConfigProvider,
  Form,
  Button,
  Typography,
  Space,
  App as AntdApp,
  Row,
  Col,
  Switch,
} from "antd";
// import type { Dayjs } from "dayjs";

import { ultraCompactWinformTheme } from "./theme/themeConfig";

// Form import
import { CustomInput } from "./components/form/custom-input";
import { CustomSelect } from "./components/form/custom-select";
import { CustomDatePicker } from "./components/form/custom-date-picker";
import { CustomDateRangePicker } from "./components/form/custom-date-range-picker";
import { CustomInputNumber } from "./components/form/custom-input-number";
import { CustomRadioGroup } from "./components/form/custom-radio-group";
import { CustomCheckboxGroup } from "./components/form/custom-checkbox-group";
import { CustomSwitch } from "./components/form/custom-switch";

// Modal imports
import { BaseModal } from "./components/modal/base-modal";
import { FormModal } from "./components/modal/form-modal";
import { MessageBox, setStaticModal } from "./components/modal/message-box";
import { CustomPopconfirm } from "./components/modal/custom-popconfirm";
import { CustomUpload } from "./components/form/custom-upload";
import { CustomTextArea } from "./components/form/custom-textarea";
import { CustomLayout } from "./components/layout/dashboard-layout-custom";
import { CustomTabs } from "./components/tab/custom-tab";
import { CustomAutoComplete } from "./components/form/custom-auto-complete";
import { CustomFormRepeater } from "./components/form/custom-form-repeater";

// Import data
import {
  topMenuItems,
  sideMenuItems,
  breadcrumbs,
  selectOptions,
  cityOptions,
  genderOptions,
  hobbyOptions,
} from "./yummy_data";
import { CustomPassword } from "./components/form/custom-input-password";
// import { CustomOTP } from "./components/form/custom-otp";
// import StepCustom from "./components/step/step-custom";
import { EmployeeList } from "./components/table/employee-list";

const { Title } = Typography;

const AppContent: React.FC = () => {
  const [form] = Form.useForm();
  const [modalForm] = Form.useForm();

  // Register context-aware modal instance
  const { modal, message } = AntdApp.useApp();
  useEffect(() => {
    setStaticModal(modal);
  }, [modal]);

  // Modal visibility states
  const [isBaseOpen, setIsBaseOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  const handleFinish = (values: unknown) => {
    console.log("Dữ liệu lưu:", values);
  };

  const handleModalFormFinish = (values: Record<string, unknown>) => {
    console.log("Dữ liệu Modal Form:", values);
    MessageBox.success(
      `Form gửi thành công: ${JSON.stringify(values)}`,
      "Thông báo",
    );
    setIsFormOpen(false);
    modalForm.resetFields();
  };

  // const handlePanelChange = (value: Dayjs, mode: string) => {
  //   console.log(
  //     "Tháng/Năm thay đổi:",
  //     value.format("DD-MM-YYYY"),
  //     "Chế độ:",
  //     mode,
  //   );
  // };

  // const handleSelect = (date: Dayjs) => {
  //   console.log("Bạn vừa click vào ngày:", date.format("DD-MM-YYYY"));
  // };

  return (
    <CustomLayout
      topMenu={{
        items: topMenuItems,
        defaultSelectedKeys: ["1"],
        onClick: (e) => console.log("Top menu clicked", e.key),
      }}
      sideMenu={{
        items: sideMenuItems,
        defaultSelectedKeys: ["1"],
        defaultOpenKeys: ["sub1"],
        onClick: (e) => console.log("Side menu clicked", e.key),
      }}
      breadcrumbItems={breadcrumbs}
    >
      <div style={{ textAlign: "left" }}>
        <Space
          align="center"
          style={{
            background: "#f5f5f5",
            padding: "4px 8px",
            borderRadius: 4,
            border: "1px solid #d9d9d9",
            marginBottom: 8,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 500 }}>
            Disable toàn bộ Form:
          </span>
          <Switch
            checked={formDisabled}
            onChange={setFormDisabled}
            size="small"
          />
        </Space>

        <CustomTabs
          size="small"
          items={[
            {
              key: "1",
              label: "Thông tin nhân viên",
              children: (
                <>
                  <Form
                    form={form}
                    layout="vertical"
                    labelAlign="left"
                    onFinish={handleFinish}
                    disabled={formDisabled}
                    style={{ background: "#f6f3f4", padding: 4 }}
                  >
                    <Row gutter={[2, 2]} justify="start">
                      <Col span={6}>
                        <CustomInput
                          label="Mã nhân viên"
                          name="empCode"
                          required
                        />
                      </Col>
                      <Col span={6}>
                        <CustomInput
                          label="CCCD"
                          name="cccd"
                          required
                          prefix="￥"
                          suffix="RMB"
                        />
                      </Col>

                      <Col span={6}>
                        <CustomAutoComplete
                          label="Tìm kiếm"
                          name="searchCity"
                          options={cityOptions}
                          placeholder="Nhập tỉnh/thành..."
                        />
                      </Col>

                      <Col span={6}>
                        <CustomInputNumber
                          label="Tuổi"
                          name="age"
                          required
                          type="number"
                        />
                      </Col>

                      <Col span={6}>
                        <CustomSelect
                          label="Trạng thái"
                          name="status"
                          required
                          options={selectOptions}
                        />
                      </Col>

                      <Col span={6}>
                        <CustomDatePicker
                          label="Ngày sinh"
                          name="birthday"
                          required
                        />
                      </Col>

                      <Col span={6}>
                        <CustomDateRangePicker
                          label="Thời gian làm"
                          name="workPeriod"
                          required
                        />
                      </Col>
                      <Col span={6}>
                        <CustomPassword
                          label="Mật khẩu mới"
                          name="newPassword"
                          required
                        />
                      </Col>
                      {/* <Col span={6}>
                        <CustomOTP
                          label="Mã xác thực"
                          name="otpCode"
                          required
                        />
                      </Col> */}
                      <Col span={6}>
                        <CustomTextArea
                          label="Ghi chú "
                          name="notes"
                          maxLength={1000}
                        />
                      </Col>
                      <Col span={6}>
                        <CustomRadioGroup
                          label="Giới tính"
                          name="gender"
                          required
                          options={genderOptions}
                        />
                      </Col>

                      <Col span={6}>
                        <CustomCheckboxGroup
                          label="Sở thích"
                          name="hobbies"
                          options={hobbyOptions}
                        />
                      </Col>

                      <Col span={6}>
                        <CustomSwitch label="Kích hoạt" name="isActive" />
                      </Col>

                      <Col span={6}>
                        <CustomUpload
                          label="Hợp đồng"
                          name="contractFile"
                          required
                          maxSizeMB={2}
                          allowedExts={[".pdf", ".docx"]}
                          btnText="Browse..."
                        />
                      </Col>

                      <Col span={8}>
                        <Title level={3} style={{ marginBottom: 8 }}>
                          Lịch sử công tác (Danh sách)
                        </Title>

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
                                  name={[field.name, "company"]}
                                  required
                                  style={{ width: "100%" }}
                                />
                              </Col>
                              <Col span={12}>
                                <CustomInput
                                  label="Chức vụ"
                                  name={[field.name, "position"]}
                                  required
                                  style={{ width: "100%" }}
                                />
                              </Col>
                            </Row>
                          )}
                        </CustomFormRepeater>
                      </Col>
                    </Row>

                    {/* Đã thêm textAlign: 'left' vào Form.Item và justify="start" vào Space */}
                    <Form.Item
                      style={{
                        marginTop: 16,
                        marginBottom: 0,
                        textAlign: "left",
                      }}
                    >
                      <Space
                        wrap
                        style={{ width: "100%", justifyContent: "flex-start" }}
                      >
                        <Button
                          type="primary"
                          htmlType="submit"
                          size="small"
                          disabled={formDisabled}
                        >
                          Lưu Dữ Liệu
                        </Button>
                        <Button
                          type="primary"
                          danger
                          size="small"
                          disabled={formDisabled}
                        >
                          Hủy Bỏ
                        </Button>
                        <Button
                          type="dashed"
                          size="small"
                          disabled={formDisabled}
                        >
                          Thêm Mới
                        </Button>
                        <Button
                          type="text"
                          size="small"
                          disabled={formDisabled}
                        >
                          Chi tiết
                        </Button>
                        <Button
                          type="link"
                          size="small"
                          disabled={formDisabled}
                        >
                          Đọc thêm
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>
                </>
              ),
            },
            // {
            //   key: "2",
            //   label: "Cấu hình nâng cao 1",
            //   children: (
            //     <>
            //       {/* <CustomCalendar
            //         events={myEvents}
            //         monthNotes={myMonthNotes}
            //         mode="month"
            //         fullscreen={true}
            //         onSelect={(date) => console.log('Đã chọn ngày:', date.format('DD-MM-YYYY'))}
            //       /> */}
            //       <div style={{ marginTop: 12 }}>
            //         <CustomMiniCalendar
            //           width={240}
            //           bordered={true}
            //           onPanelChange={handlePanelChange}
            //           onSelect={handleSelect}
            //         />
            //       </div>
            //     </>
            //   ),
            // },
            {
              key: "3",
              label: "Cấu hình nâng cao 2",
              children: (
                <>
                  <Title level={3}>Test Bộ Modal & Popups</Title>
                  <Space
                    direction="horizontal"
                    size="small"
                    wrap
                    style={{ width: "100%", justifyContent: "flex-start" }}
                  >
                    <Button
                      size="small"
                      type="primary"
                      onClick={() => setIsBaseOpen(true)}
                    >
                      Open Base Modal
                    </Button>

                    <Button
                      size="small"
                      type="primary"
                      onClick={() => setIsFormOpen(true)}
                    >
                      Open Form Modal
                    </Button>

                    <Button
                      size="small"
                      type="primary"
                      onClick={() =>
                        MessageBox.info(
                          "Đây là hộp thoại thông tin của hệ thống.",
                          "Thông tin",
                        )
                      }
                    >
                      Show MessageBox.info
                    </Button>

                    <Button
                      size="small"
                      type="primary"
                      onClick={() => {
                        MessageBox.confirm(
                          "Bạn có chắc chắn muốn thực hiện hành động này không?",
                          "Xác nhận hệ thống",
                          () => {
                            message.success("Đã xác nhận thành công!");
                          },
                          () => {
                            console.log("Đã huỷ bỏ");
                          },
                        );
                      }}
                    >
                      Show MessageBox.confirm
                    </Button>

                    <CustomPopconfirm
                      title="Xóa dữ liệu"
                      description="Bạn có chắc chắn muốn xóa bản ghi này?"
                      onConfirm={() => {
                        message.success("Bản ghi đã được xóa.");
                      }}
                    >
                      <Button size="small" type="primary" danger>
                        Custom Popconfirm
                      </Button>
                    </CustomPopconfirm>
                  </Space>
                  {/* <Title level={3}>Test Bộ Step</Title>
                  <StepCustom /> */}
                  <Title level={3}>Test Bộ table</Title>
                  <EmployeeList />
                </>
              ),
            },
          ]}
        />

        {/* Base Modal Test */}
        <BaseModal
          title="Base Modal Test"
          open={isBaseOpen}
          onOk={() => setIsBaseOpen(false)}
          onCancel={() => setIsBaseOpen(false)}
        >
          <p>Đây là nội dung hiển thị bên trong Base Modal.</p>
          <p>
            Component này giữ nguyên thiết kế và các thuộc tính tiêu chuẩn của
            Ant Design nhưng có tuỳ chỉnh kích thước các nút nhỏ gọn hơn theo
            theme winform.
          </p>
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
            style={{ width: "100%" }}
          />
          <CustomInput
            label="Tên tài khoản"
            name="username"
            required
            style={{ width: "100%" }}
          />
          <CustomInput
            label="Mật khẩu"
            name="password"
            type="password"
            required
            style={{ width: "100%" }}
          />
        </FormModal>
      </div>
    </CustomLayout>
  );
};

const App: React.FC = () => {
  return (
    <ConfigProvider theme={ultraCompactWinformTheme} componentSize="small">
      <AntdApp>
        <AppContent />
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
