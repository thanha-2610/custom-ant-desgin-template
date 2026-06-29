import React, { useState } from 'react'; 
import { TableToolbar } from './table-toolbar';
import { CustomTable } from './custom-table';
import { Tag, Space, Button, Tooltip, Popconfirm, message } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

// Khai báo Type bổ sung thêm status
interface Employee {
  id: string;
  empCode: string;
  empName: string;
  department: string;
  status: 'active' | 'inactive'; // Thêm trạng thái
}

export const EmployeeList: React.FC = () => {
  // State quản lý dữ liệu (giả lập API)
  const [data, setData] = useState<Employee[]>([
    { id: '1', empCode: 'NV001', empName: 'Nguyễn Văn A', department: 'IT', status: 'active' },
    { id: '2', empCode: 'NV002', empName: 'Trần Thị B', department: 'Kế toán', status: 'active' },
    { id: '3', empCode: 'NV003', empName: 'Lê Văn C', department: 'Hành chính', status: 'inactive' },
  ]);

  // Hành động mẫu
  const handleDelete = (id: string) => {
    setData(prev => prev.filter(item => item.id !== id));
    message.success('Đã xóa nhân viên thành công!');
  };

  // Khai báo cột với các Templates cho Admin Dashboard
  const columns = [
    { 
      title: 'Mã NV', 
      dataIndex: 'empCode', 
      width: 100,
      sorter: (a: Employee, b: Employee) => a.empCode.localeCompare(b.empCode), // TEMPLATE: Sắp xếp
    },
    { 
      title: 'Họ và tên', 
      dataIndex: 'empName', 
      width: 250,
      sorter: (a: Employee, b: Employee) => a.empName.localeCompare(b.empName),
    },
    { 
      title: 'Phòng ban', 
      dataIndex: 'department', 
      width: 150,
      // TEMPLATE: Lọc dữ liệu (Filter)
      filters: [
        { text: 'IT', value: 'IT' },
        { text: 'Kế toán', value: 'Kế toán' },
        { text: 'Hành chính', value: 'Hành chính' },
      ],
      onFilter: (value: any, record: Employee) => record.department === value,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: 120,
      align: 'center' as const,
      // TEMPLATE: Render Tag trạng thái
      render: (status: string) => {
        const color = status === 'active' ? 'green' : 'red';
        const text = status === 'active' ? 'Đang làm việc' : 'Đã nghỉ';
        return <Tag color={color} style={{ margin: 0 }}>{text}</Tag>;
      }
    },
    {
      title: 'Hành động',
      key: 'action',
      width: 120,
      align: 'center' as const,
      fixed: 'right' as const, // Cố định cột này ở bên phải khi cuộn ngang
      // TEMPLATE: Render các nút thao tác
      render: (_: unknown, record: Employee) => (
        <Space size="small">
          <Tooltip title="Xem chi tiết">
            <Button type="text" size="small" icon={<EyeOutlined style={{ color: '#1890ff' }}/>} />
          </Tooltip>
          
          <Tooltip title="Chỉnh sửa">
            <Button type="text" size="small" icon={<EditOutlined style={{ color: '#faad14' }}/>} />
          </Tooltip>
          
          <Tooltip title="Xóa">
            <Popconfirm
              title="Bạn có chắc chắn muốn xóa?"
              onConfirm={() => handleDelete(record.id)}
              okText="Xóa"
              cancelText="Hủy"
            >
              <Button type="text" size="small" danger icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="winform-table-container">
      <TableToolbar 
        title="Danh sách Nhân sự"
        onSearch={(val) => console.log('Tìm kiếm:', val)}
        onReload={() => console.log('Tải lại dữ liệu...')}
        onAdd={() => console.log('Mở modal thêm mới...')}
        onExport={() => console.log('Đang tải file Excel...')}
      />
      
      <CustomTable<Employee>
        columns={columns}
        dataSource={data}
        rowSelection={{
          type: 'checkbox',
          onChange: (keys) => console.log('Đã chọn:', keys),
        }}
      />
    </div>
  );
};