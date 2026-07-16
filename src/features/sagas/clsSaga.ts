import { put, takeLatest, delay } from 'redux-saga/effects';
import { clsActions } from '../slices/clsSlice'; 
import type { MedicalOrder, Patient } from '../QuanLyCLS/types';

// Mock data Danh sách bệnh nhân chờ
const mockPatients: Patient[] = [
  { stt: 1, maYTe: 'BN00123', hoTen: 'Nguyễn Văn A', namSinh: '1990', gioiTinh: 'Nam', cccd: '0123456789', phongKham: 'Phòng khám Nội', loaiDoiTuong: 'BHYT' },
  { stt: 2, maYTe: 'BN00124', hoTen: 'Trần Thị B', namSinh: '1985', gioiTinh: 'Nữ', cccd: '0987654321', khoa: 'Khoa Ngoại', loaiDoiTuong: 'DichVu' },
];

// Mock data Chỉ định chi tiết
const mockOrders: Record<string, MedicalOrder[]> = {
  'X-QUANG': [
    { maChiDinh: 'CL01', tenDichVu: 'Chụp X-Quang Phổi Thẳng', thoiGianChiDinh: '14:00', bacSiChiDinh: 'BS. Nguyễn Văn Thực', khoaPhongChiDinh: 'Phòng X-Quang 1', trangThai: 'CHUA_XAC_NHAN' }
  ],
  'HUYET_HOC': [
    { maChiDinh: 'CL02', tenDichVu: 'Tổng phân tích tế bào máu ngoại vi', thoiGianChiDinh: '14:30', bacSiChiDinh: 'BS. Lê Quang Hồng', khoaPhongChiDinh: 'Phòng Xét Nghiệm', trangThai: 'DA_THUC_HIEN' }
  ]
};

function* handleSearchPatient() {
  yield delay(800); // Giả lập loading mạng
  yield put(clsActions.fetchPatientSuccess(mockPatients));
}

function* handleFetchOrders(action: any) {
  yield delay(500);
  const group = action.payload; // Nhóm CLS đang chọn (X-Quang, CT...)
  const orders = mockOrders[group] || [];
  yield put(clsActions.fetchOrdersSuccess(orders));
}

export function* clsSaga() {
  yield takeLatest(clsActions.searchPatient.type, handleSearchPatient);
  yield takeLatest(clsActions.setSelectedGroup.type, handleFetchOrders);
}