import viVN from 'antd/es/locale/vi_VN';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

export const extendsDayJs = () => {
  dayjs.extend(updateLocale);
  
  // 1. Configure standard 'vi' locale (Starts on Monday, long day names)
  dayjs.locale('vi');
  dayjs.updateLocale('vi', {
    weekStart: 1, // Thứ hai là cột đầu tiên
    weekdaysShort: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
    weekdaysMin: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']
  });
  
  if (dayjs.Ls['vi']) {
    dayjs.locale('vi_VN', dayjs.Ls['vi']);
  }

  // 2. Configure 'vi-mini' locale for the custom card calendar (Starts on Monday, short day names T2, T3, ... CN)
  dayjs.locale('vi-mini', {
    ...dayjs.Ls['vi'],
    weekStart: 1, // Thứ hai là cột đầu tiên
    weekdaysShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    weekdaysMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
  });
}

// Vietnamese locale config for Custom Notice Calendar
export const customViVN = {
  ...viVN,
  locale: 'vi_VN',
  Calendar: {   
    ...viVN.Calendar,
    lang: {
      ...viVN.Calendar?.lang,
      locale: 'vi_VN',
      shortWeekDays: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
    },
  },
  DatePicker: {
    ...viVN.DatePicker,
    lang: {
      ...viVN.DatePicker?.lang,
      locale: 'vi_VN',
      shortWeekDays: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
    },
  },
} as any;

// Vietnamese locale config for Custom Card (Mini) Calendar (CN, T2, T3, T4, T5, T6, T7)
export const customMiniViVN = {
  ...viVN,
  locale: 'vi-mini',
  Calendar: {   
    ...viVN.Calendar,
    lang: {
      ...viVN.Calendar?.lang,
      locale: 'vi-mini',
      shortWeekDays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    },
  },
  DatePicker: {
    ...viVN.DatePicker,
    lang: {
      ...viVN.DatePicker?.lang,
      locale: 'vi-mini',
      shortWeekDays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    },
  },
} as any;