//libs
import React, { useState } from 'react';
import { Layout, Menu, Avatar, Popover } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

//others
import './style.scss';
import { MenuItem } from './DataSource/MenuItem';
import { renderListSubMenu } from '@/utils/Dashboard';

const { Header, Sider, Content } = Layout;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const SliderLayout = ({ children }: { children: JSX.Element }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          {renderListSubMenu(MenuItem)}
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='site-layout-background header-dashboard'
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            }
          )}
          <Popover className='user-control' content={content} trigger='click'>
            <Avatar size={38} icon={<UserOutlined />} />
            <div className='user-control-nan'>Hoang Binh An</div>
          </Popover>
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 'auto',
            backgroundColor: 'none',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SliderLayout;
