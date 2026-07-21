import React from "react";
import { Calendar, theme, ConfigProvider } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import { customMiniViVN, extendsDayJs } from "./type-ViVN";

extendsDayJs();

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

  const wrapperStyle = {
    width: width,
    border: bordered ? `1px solid ${token.colorBorderSecondary}` : "none",
    borderRadius: 4,
    background: token.colorBgContainer,
    overflow: "hidden",
    // 💡 Tiêm biến CSS nội bộ của Ant Design vào đây
    "--ant-calendar-cell-width": "20px",
    ...style,
  } as React.CSSProperties; // Ép kiểu để TypeScript không báo lỗi với Custom Variable

  return (
    <div style={wrapperStyle} className="custom-mini-calendar">
      <style>{`
        .custom-mini-calendar .ant-picker-cell {
          width: 23px !important;
          height: 23px !important;
        }
        .custom-mini-calendar .ant-picker-cell-inner {
          width: 23px !important;
          height: 23px !important;
          min-width: 23px !important;
          line-height: 23px !important;
        }
      `}</style>
      <ConfigProvider locale={customMiniViVN}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} {...rest} />
      </ConfigProvider>
    </div>
  );
};
