import React from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar, ConfigProvider, Select, Radio } from 'antd';
import type { Dayjs } from 'dayjs'; 
import { customViVN, extendsDayJs } from './type-ViVN';

extendsDayJs();  
 
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

  const headerRender: CalendarProps<Dayjs>['headerRender'] = ({
    value,
    type,
    onChange,
    onTypeChange,
  }) => {
    const start = value.year() - 10;
    const end = value.year() + 10;
    const yearOptions = [];
    for (let i = start; i <= end; i++) {
      yearOptions.push({ label: `${i}`, value: i });
    }

    const monthOptions = [];
    for (let i = 0; i < 12; i++) {
      monthOptions.push({
        label: `Th ${String(i + 1).padStart(2, '0')}`,
        value: i,
      });
    }

    return (
      <div style={{ padding: '8px 16px', display: 'flex', justifyContent: 'flex-end', gap: 8, alignItems: 'center' }}>
        <Select
          size="small"
          value={value.year()}
          options={yearOptions}
          onChange={(newYear) => {
            onChange(value.clone().year(newYear));
          }}
        />
        {type === 'month' && (
          <Select
            size="small"
            value={value.month()}
            options={monthOptions}
            onChange={(newMonth) => {
              onChange(value.clone().month(newMonth));
            }}
          />
        )}
        <Radio.Group
          size="small"
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <Radio.Button value="month">Tháng</Radio.Button>
          <Radio.Button value="year">Năm</Radio.Button>
        </Radio.Group>
      </div>
    );
  };

  return (
    <ConfigProvider locale={customViVN}>
      <Calendar
        cellRender={cellRender}
        fullscreen={fullscreen}
        headerRender={headerRender}
        {...rest}
      />
    </ConfigProvider>
  );
};