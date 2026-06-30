import React from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar, ConfigProvider } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import updateLocale from 'dayjs/plugin/updateLocale';
import viVN from 'antd/es/locale/vi_VN';

dayjs.extend(updateLocale);
dayjs.locale('vi');
dayjs.updateLocale('vi', {
  weekdaysShort: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
  weekdaysMin: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']
});
 
export interface CalendarEvent {
  date: string; // Định dạng 
  type: BadgeProps['status']; // 'success' | 'processing' | 'error' | 'default' | 'warning'
  content: string;
}

export interface CalendarMonthNote {
  month: string; // Định dạng tháng
  content: React.ReactNode;
}

export interface CustomCalendarProps extends CalendarProps<Dayjs> {
  events?: CalendarEvent[];
  monthNotes?: CalendarMonthNote[];
}

export const CustomCalendar: React.FC<CustomCalendarProps> = ({
  events = [],
  monthNotes = [],
  fullscreen = false,
  ...rest
}) => {
  
  const dateCellRender = (value: Dayjs) => {
    const stringDate = value.format('DD-MM-YYYY');
    const listData = events.filter(event => event.date === stringDate);

    return (
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {listData.map((item, index) => (
          <li key={`${item.content}-${index}`}>
            <Badge status={item.type} text={item.content} style={{ fontSize: 12 }} />
          </li>
        ))}
      </ul>
    );
  };

  const monthCellRender = (value: Dayjs) => {
    const stringMonth = value.format('YYYY-MM');
    const noteData = monthNotes.find(note => note.month === stringMonth);

    return noteData ? (
      <div style={{ textAlign: 'center', marginTop: 8 }}>
        {noteData.content}
      </div>
    ) : null;
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') {
      return dateCellRender(current);
    }
    if (info.type === 'month') {
      return monthCellRender(current);
    }
    return info.originNode;
  };

  return (
    <ConfigProvider locale={viVN}>
      <Calendar cellRender={cellRender} fullscreen={fullscreen} {...rest} />
    </ConfigProvider>
  );
};