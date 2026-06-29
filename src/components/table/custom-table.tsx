import { Table } from 'antd';
import type { TableProps } from 'antd'; 

export interface CustomTableProps<T> extends TableProps<T> {
  hidePagination?: boolean;
  zebra?: boolean; // Tùy chọn bật/tắt dòng chẵn lẻ
}

export function CustomTable<T extends object>({
  rowKey = 'id',
  size = 'small', 
  bordered = true,   
  hidePagination = false,
  zebra = true,
  pagination,
  scroll,
  rowClassName,
  ...rest
}: CustomTableProps<T>) {
  
  // Cấu hình phân trang chuẩn Winform (Thường hiển thị nhiều dữ liệu hơn)
  const defaultPagination = hidePagination
    ? false
    : {
        defaultPageSize: 50,
        showSizeChanger: true,
        pageSizeOptions: ['20', '50', '100', '500'],
        showTotal: (total: number, range: [number, number]) =>
          `Hiển thị ${range[0]}-${range[1]} / Tổng ${total} bản ghi`,
        ...pagination,
      };

  // Logic xử lý class cho dòng chẵn/lẻ
  const handleRowClassName = (record: T, index: number) => {
    let classes = zebra ? (index % 2 === 0 ? 'table-row-even' : 'table-row-odd') : '';
    
    // Nếu component cha truyền thêm rowClassName thì nối vào
    if (rowClassName) {
      const customClass = typeof rowClassName === 'function' ? rowClassName(record, index, 0) : rowClassName;
      classes += ` ${customClass}`;
    }
    return classes;
  };

  return (
    <Table<T>
      rowKey={rowKey}
      size={size}
      bordered={bordered}
      pagination={defaultPagination as TableProps<T>['pagination']}
      // y: calc(100vh - 280px) là công thức "thần thánh" để bảng tự động co giãn theo màn hình và cố định Header
      scroll={{ x: 'max-content', y: 'calc(100vh - 280px)', ...scroll }} 
      rowClassName={handleRowClassName}
      {...rest}
    />
  );
}