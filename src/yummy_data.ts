import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { CalendarEvent } from './components/calendar/custom-notice-calendar';

// 1. Dữ liệu Top Menu
export const topMenuItems = [
  {
    key: '1',
    label: 'Hệ thống',
    children: [
      { key: '1.1', label: 'Cấu hình kí số' },
      {
        key: '1.2',
        label: 'Danh mục',
        children: [
          { key: '1.2.1', label: 'Nghề nghiệp' },
          { key: '1.2.2', label: 'Nhóm máu' },
          { key: '1.2.3', label: 'Phân loại thể lực' },
          { key: '1.2.4', label: 'Răng - Hàm - Mặt' },
          { key: '1.2.5', label: 'Chỉ số xét nghiệm' },
        ],
      },
      {
        key: '1.3',
        label: 'Phân quyền',
        children: [
          { key: '1.3.1', label: 'Quản lý đơn vị' },
          { key: '1.3.2', label: 'Quản lý đợt khám' },
          { key: '1.3.3', label: 'Quản lý bệnh nhân' },
        ],
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
      { key: '2.1', label: 'Khám sức khỏe' },
      { key: '2.2', label: 'Phân quyền bác sĩ' },
    ],
  },
  {
    key: '3',
    label: 'Trợ giúp',
  },
];

// 2. Dữ liệu Menu dọc
export const sideMenuItems = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
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
export const breadcrumbs = [
  { title: 'Trang chủ' },
  { title: 'Danh mục 1' },
  { title: 'Màn hình 1' },
];

// 4. Các tùy chọn Select
export const selectOptions = [
  { value: 'active', label: 'Hoạt động' },
  { value: 'inactive', label: 'Ngừng hoạt động' },
];

// 5. Tùy chọn AutoComplete tỉnh/thành
export const cityOptions = [
  { value: 'Hà Nội' },
  { value: 'TP. Hồ Chí Minh' },
  { value: 'Đà Nẵng' },
  { value: 'Hải Phòng' },
  { value: 'Cần Thơ' },
];

// 6. Tùy chọn Giới tính (Radio)
export const genderOptions = [
  { label: 'Nam', value: 'male' },
  { label: 'Nữ', value: 'female' },
];

// 7. Tùy chọn Sở thích (Checkbox)
export const hobbyOptions = [
  { label: 'Thể thao', value: 'sports' },
  { label: 'Âm nhạc', value: 'music' },
];

// 8. Tùy chọn Quyền hạn (Transfer)
export const permissionOptions = [
  { key: '1', title: 'Quyền xem báo cáo' },
  { key: '2', title: 'Quyền sửa nhân viên' },
  { key: '3', title: 'Quyền xóa nhân viên' },
];

// 9. Lịch Sự kiện
export const myEvents: CalendarEvent[] = [
  { date: '2026-06-08', type: 'warning', content: 'Họp giao ban' },
  { date: '2026-06-08', type: 'success', content: 'Gặp khách hàng' },
  { date: '2026-06-10', type: 'error', content: 'Deadline dự án A' },
  { date: '2026-06-15', type: 'processing', content: 'Sự kiện công ty' },
];

// 10. Ghi chú Tháng
export const myMonthNotes = [
  {
    month: '2026-06',
    content: React.createElement(
      React.Fragment,
      null,
      React.createElement('section', { style: { fontWeight: 'bold', color: '#1890ff' } }, '1394'),
      React.createElement('span', { style: { fontSize: 12 } }, 'Backlog number')
    ),
  },
];
