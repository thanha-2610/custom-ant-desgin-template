import type { ThemeConfig } from 'antd';

export const ultraCompactWinformTheme: ThemeConfig = {
  token: {
    colorPrimary: '#0072BC',
    colorBgLayout: '#EEEFF1',
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
      itemMarginBottom: 4,   
      labelFontSize: 12,
    },
    Table: {
      padding: 4,               
      paddingContentVertical: 2,
      fontSize: 12,
    },
     
    Layout: {
      headerHeight: 36, // Thu nhỏ Header (mặc định là 64px)
      headerBg: '#034EA2', // Màu nền Header (Theme dark mặc định)
      headerColor: '#FFFFFF', // Màu chữ trên Header 
      siderBg: '#034EA2', // Màu nền của Sidebar
      triggerHeight: 36, // Chiều cao của nút thu gọn/phóng to Sidebar
      triggerBg: '#002140', // Màu nền của nút thu gọn Sidebar
      triggerColor: '#fff', // Màu icon của nút thu gọn
      bodyBg: '#f0f0f0', // Màu nền của phần Content (thường set trùng colorBgLayout)
      footerBg: '#f0f0f0', // Màu nền của Footer
      footerPadding: '12px 24px', // Padding của Footer
    }, 
    Menu: {
      // KÍCH THƯỚC & KHOẢNG CÁCH (Chuẩn Compact)
      itemHeight: 28,             // Chiều cao mỗi dòng menu (mặc định 40)
      itemMarginInline: 4,        // Khoảng cách từ viền Menu đến item (giảm xuống cho hẹp lại)
      itemPaddingInline: 5,      // Căn lề trong (padding) của chữ so với viền item
      itemBorderRadius: 2,        // Bo góc của item (Winform thường ít bo góc, set 2 hoặc 0)
      iconMarginInlineEnd: 5,     // Khoảng cách từ Icon đến Text (mặc định 10)
      iconSize: 16,               // Kích thước icon trong Menu

      // MÀU SẮC TRẠNG THÁI (Dành cho Menu Light)
      itemColor: '#4B5563',               // Màu chữ mặc định
      itemHoverColor: '#0072BC',          // Màu chữ khi di chuột vào
      itemHoverBg: '#d8efffff',             // Màu nền khi di chuột vào (màu xanh nhạt)
      itemSelectedColor: '#ffffff',       // Màu chữ khi đang được chọn
      itemSelectedBg: '#0072BC',          // Màu nền khi đang được chọn (xanh đậm)
      itemActiveBg: '#cce3f2',            // Màu nền khi click chuột xuống (Active)
      
      // MENU CON (SubMenu)
      subMenuItemBg: '#f9f9f9',           // Màu nền của các menu con sổ xuống
      popupBg: '#ffffff',                 // Màu nền của menu popup (khi sidebar thu gọn)
      
      // MÀU SẮC MENU DARK (Nếu dùng theme="dark" trên thẻ <Menu>)
      darkItemBg: '#034EA2',
      darkItemColor: '#ffffff',
      darkItemHoverColor: '#ffffff',
      darkItemHoverBg: 'transparent',
      darkItemSelectedColor: '#ffffff',
      darkItemSelectedBg: '#0A5DBA', 
      darkSubMenuItemBg: '#034EA2',
    },
    Steps: {
      iconSize: 16,

    },
    Tabs: {
      // --- DÀNH CHO TAB DẠNG THẺ (type="card") ---
      cardHeight: 43,               // Chiều cao của thẻ Tab (Winform thường lùn, set 26-28)
      cardPadding: '12px 24px',      // Độ thụt lề (padding) bên trong mỗi thẻ Tab
      cardBg: '#F2F2F7',            // Màu nền của các thẻ Tab CHƯA được chọn (màu xám nhạt)
      cardGutter: 0,                // Khoảng cách (khe hở) giữa các thẻ Tab với nhau
      borderRadius: 0,            
      
      // --- DÀNH CHO TEXT VÀ TRẠNG THÁI ---
      titleFontSize: 12,            // Kích thước chữ của tiêu đề Tab
      itemColor: '#4B5563',         // Màu chữ của Tab khi chưa chọn
      itemHoverColor: '#0070BA',    // Màu chữ khi di chuột qua Tab
      itemSelectedColor: '#0070BA', // Màu chữ của Tab đang được chọn (Active) 
      
      // --- KHOẢNG CÁCH CHUNG ---
      horizontalMargin: '0 0 8px 0',    // Khoảng cách từ thanh chứa Tab đến nội dung bên dưới
      horizontalItemPadding: '12px 24px', // Dành cho Tab dạng đường kẻ ngang (type="line")
      
      // --- MÀU SẮC DẠNG LINE (type="line") ---
      inkBarColor: '#0072BC',       // Màu của thanh kẻ chân bên dưới Tab đang chọn
    } 
  },
};