import type { ThemeConfig } from 'antd';

export const ultraCompactWinformTheme: ThemeConfig = {
  token: {
    colorPrimary: '#0072BC',
    colorBgLayout: '#f0f0f0',
    fontSize: 12,               
    borderRadius: 4,            
    controlHeightSM: 25,        
    paddingMD: 16,
    paddingContentHorizontalLG: 16,
  },
  components: {
    Typography: {
      fontSizeHeading1: 12,
      fontSizeHeading2: 12,
      fontSizeHeading3: 12,
      fontWeightStrong: 700,
    },
    // Input: {        
    //   controlHeightSM: 25,
    // },
    Select: {
      optionHeight: 25, 
    },
      
    Form: {
      itemMarginBottom: 8,      
      labelFontSize: 12,
    },
    Table: {
      padding: 4,               
      paddingContentVertical: 2,
      fontSize: 12,
    },
    Tabs: {
      cardHeight: 25,           
      horizontalMargin: '0 0 0 0',
    },
    Menu: {
      itemHeight: 32,
      collapsedWidth: 48,
    }
  },
};