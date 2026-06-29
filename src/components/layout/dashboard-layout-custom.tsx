// src/components/layout/CustomLayout.tsx
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, theme, Space, Avatar, Badge, Tooltip } from 'antd';
import type { MenuProps, BreadcrumbProps } from 'antd';
import { MenuOutlined, BellOutlined,  UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

export interface CustomLayoutProps {
  /** Nội dung chính của trang */
  children: React.ReactNode;
  
  /** Logo hiển thị trên Header */
  logo?: React.ReactNode;
  
  /** Cấu hình menu ngang (Top Menu) */
  topMenu?: {
    items: MenuProps['items'];
    defaultSelectedKeys?: string[];
    onClick?: MenuProps['onClick'];
  };
  
  /** Cấu hình menu dọc (Sidebar Menu) */
  sideMenu?: {
    items: MenuProps['items'];
    defaultSelectedKeys?: string[];
    defaultOpenKeys?: string[];
    onClick?: MenuProps['onClick'];
  };
  
  /** Danh sách đường dẫn Breadcrumb */
  breadcrumbItems?: BreadcrumbProps['items'];
}

export const CustomLayout: React.FC<CustomLayoutProps> = ({
  children,
  logo,
  topMenu,
  sideMenu,
  breadcrumbItems,
}) => { 
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* HEADER */}
      <Header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0', 
        justifyContent: 'space-between',
        background: '#034EA2' 
      }}>
        <Space size="middle" style={{ display: 'flex', alignItems: 'center', padding: "0 5px" }}>
          <MenuOutlined 
            style={{ color: '#fff', fontSize: '16px', cursor: 'pointer' }} 
            onClick={() => setCollapsed(!collapsed)}
          />
          {logo && <div style={{ display: 'flex', alignItems: 'center' }}>{logo}</div>}
        </Space>
        
        {topMenu?.items && (
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={topMenu.defaultSelectedKeys}
            onClick={topMenu.onClick}
            items={topMenu.items}
            className="top-menu-custom"
            style={{ flex: 1, minWidth: 0, borderBottom: 'none' }}
          />
        )}
 
        <Space size="small" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', paddingRight: 5, gap: 10 }}>
          <Space size="small" style={{ display: 'flex', alignItems: 'center', color: '#fff', cursor: 'pointer' }}>
            <Badge dot status="success" offset={[-2, 10]}>
              <Avatar size="small" icon={<UserOutlined />} style={{ backgroundColor: '#0072BC' }} />
            </Badge>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2', textAlign: 'left' }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Nguyễn Văn A</span>
              <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.75)' }}>Mặc định</span>
            </div>
          </Space>
          <Tooltip title="Hướng dẫn">
            <QuestionCircleOutlined style={{ color: '#fff', fontSize: '16px', cursor: 'pointer' }} /> 
          </Tooltip>
           <Badge dot status="error" offset={[-2, 10]}>
              <BellOutlined style={{ color: '#fff', fontSize: '16px', cursor: 'pointer' }} />  
            </Badge>
        </Space>
      </Header> 

      <Layout>
        {/* SIDEBAR */}
        {sideMenu?.items && (
          <Sider 
            width={220} 
            collapsible 
            collapsed={collapsed} 
            collapsedWidth={0}
            trigger={null} 
            style={{ background: colorBgContainer }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={sideMenu.defaultSelectedKeys}
              defaultOpenKeys={sideMenu.defaultOpenKeys}
              onClick={sideMenu.onClick}
              style={{ height: '100%', borderInlineEnd: 0 }}
              items={sideMenu.items}
            />
          </Sider>
        )}

        {/* MAIN CONTENT AREA */}
        <Layout style={{ padding: '0 16px 16px' }}>
          {/* BREADCRUMB */}
          {breadcrumbItems && breadcrumbItems.length > 0 && (
            <Breadcrumb
              items={breadcrumbItems}
              style={{ margin: '8px 0' }}
            />
          )}
          
          {/* CONTENT BODY */}
          <Content
            style={{
              padding: 8,
              margin: 0,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflow: 'auto'  
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};