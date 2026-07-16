// Định nghĩa kiểu dữ liệu cho bệnh nhân trong danh sách chờ
export interface Patient {
  stt: number;
  maYTe: string; // Mã y tế lấy tiếp nhận gần nhất (NGT) hoặc Số bệnh án (NT)
  hoTen: string;
  namSinh: string;
  gioiTinh: string;
  cccd: string;
  phongKham?: string; // Nếu là ngoại trú
  khoa?: string;       // Nếu là nội trú
  loaiDoiTuong: 'BHYT' | 'DichVu'; // Đối tượng tiếp nhận
}

// Định nghĩa kiểu dữ liệu cho chỉ định cận lâm sàng chi tiết
export interface MedicalOrder {
  maChiDinh: string;
  tenDichVu: string;
  thoiGianChiDinh: string;
  bacSiChiDinh: string;
  khoaPhongChiDinh: string;
  trangThai: 'CHUA_XAC_NHAN' | 'CHUA_DONG_TIEN' | 'DA_HUY' | 'DA_THUC_HIEN'; // Trạng thái hiển thị màu
  ketQua?: string;
}

// Trạng thái lưu trữ trong Redux Store
export interface CLSState {
  searchParams: {
    fromDate: string | null;
    toDate: string | null;
    type: 'noi_tru' | 'ngoai_tru';
    keyword: string;
  };
  patientList: Patient[];
  selectedPatient: Patient | null;
  selectedGroup: string;
  orderList: MedicalOrder[];
  loadingPatient: boolean;
  loadingOrder: boolean;
}