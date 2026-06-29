import React from 'react';
import { Space, Typography, Button, Input } from 'antd';
import { PlusOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;

interface TableToolbarProps {
  title: string;
  onAdd?: () => void;
  onReload?: () => void;
  onExport?: () => void;
  onSearch?: (value: string) => void;
  extraButtons?: React.ReactNode; // Dùng để chèn thêm nút tuỳ chỉnh
  
}

export const TableToolbar: React.FC<TableToolbarProps> = ({
  title,
  onAdd,
  onReload,
  onExport,
  onSearch,
  extraButtons,
}) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '8px',
    }}>
      <Title level={5} style={{ margin: 0, color: '#0072BC', fontSize: "13px" }}>{title}</Title>
      
      <Space size="small">
        {onSearch && (
          <Search 
            placeholder="Nhập từ khóa..." 
            allowClear 
            onSearch={onSearch} 
            style={{ width: 220 }} 
            size="small"
          />
        )}
        {onReload && (
          <Button size="small" icon={<ReloadOutlined />} onClick={onReload}>
            Làm mới
          </Button>
        )}
        {extraButtons}
        {onExport && (
          <Button size="small" icon={<ExportOutlined />} onClick={onExport}>
            Xuất Excel
          </Button>
        )}
        {onAdd && (
          <Button size="small" type="primary" icon={<PlusOutlined />} onClick={onAdd}>
            Thêm mới
          </Button>
        )}
      </Space>
    </div>
  );
};