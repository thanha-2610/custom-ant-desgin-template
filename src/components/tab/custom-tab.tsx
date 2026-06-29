import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
 
export interface CustomTabsProps extends TabsProps { 
  fullHeight?: boolean; 
}

export const CustomTabs: React.FC<CustomTabsProps> = ({
  size = 'large',    
  type = 'card',      
  fullHeight = false,
  style,
  ...rest
}) => {
  return (
    <Tabs
      size={size}
      type={type}
      style={{ 
        marginBottom: 16, 
        height: fullHeight ? '100%' : 'auto',  
        ...style 
      }} 
      {...rest}
    />
  );
};