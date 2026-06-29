import React from 'react';
import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';

export interface CustomMiniCalendarProps extends CalendarProps<Dayjs> {
  width?: number | string;
  bordered?: boolean;
}

export const CustomMiniCalendar: React.FC<CustomMiniCalendarProps> = ({
  width = 300,
  bordered = true,
  onPanelChange,
  style,
  ...rest
}) => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: width,
    border: bordered ? `1px solid ${token.colorBorderSecondary}` : 'none',
    borderRadius: 4,
    background: token.colorBgContainer,
    overflow: 'hidden',
    ...style,
  };

  return (
    <div style={wrapperStyle}>
      <Calendar 
        fullscreen={false} 
        onPanelChange={onPanelChange} 
        {...rest} 
      />
    </div>
  );
};