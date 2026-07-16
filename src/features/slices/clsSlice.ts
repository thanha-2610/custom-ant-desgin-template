import { createSlice, type PayloadAction } from '@reduxjs/toolkit'; 
import type {CLSState, Patient, MedicalOrder } from '../QuanLyCLS/types';

const initialState: CLSState = {
  searchParams: { fromDate: null, toDate: null, type: 'ngoai_tru', keyword: '' },
  patientList: [],
  selectedPatient: null,
  selectedGroup: 'X-QUANG', // Mặc định chọn nhóm X-Quang
  orderList: [],
  loadingPatient: false,
  loadingOrder: false,
};

const clsSlice = createSlice({
  name: 'quanLyCLS',
  initialState,
  reducers: {
    searchPatient: (state, action: PayloadAction<any>) => {
      state.loadingPatient = true;
    },
    fetchPatientSuccess: (state, action: PayloadAction<Patient[]>) => {
      state.patientList = action.payload;
      state.loadingPatient = false;
    },
    setSelectedPatient: (state, action: PayloadAction<Patient>) => {
      state.selectedPatient = action.payload;
    },
    setSelectedGroup: (state, action: PayloadAction<string>) => {
      state.selectedGroup = action.payload;
    },
    fetchOrders: (state) => {
      state.loadingOrder = true;
    },
    fetchOrdersSuccess: (state, action: PayloadAction<MedicalOrder[]>) => {
      state.orderList = action.payload;
      state.loadingOrder = false;
    },
    setLoadingFalse: (state) => {
      state.loadingPatient = false;
      state.loadingOrder = false;
    }
  },
});

export const clsActions = clsSlice.actions;
export default clsSlice.reducer;