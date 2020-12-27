//libs
import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  ExceptionOutlined
} from '@ant-design/icons';
import Cookie from 'js-cookie'
//others
import './style.scss';
import { MenuItem } from './DataSource/MenuItem';
import { renderListSubMenu } from '@/utils/Dashboard';
//hooks
import { useRouter } from '@/hooks/useRouter'

const { Header, Sider, Content } = Layout;

const SliderLayout = ({ children }: { children: JSX.Element }) => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const onLogout = async () => {
    await Cookie.remove('refresh_token')
    await Cookie.remove('token')
    await router.push('/login')
  }
  const content = (
    <Menu>
      <Menu.Item>
        <div className='item-user-control'><ExceptionOutlined style={{ marginRight: '.3rem' }} />Infomation</div>
      </Menu.Item>
      <Menu.Item>
        <div className='item-user-control'><SettingOutlined style={{ marginRight: '.3rem' }} />Change Password</div>
      </Menu.Item>
      <Menu.Item>
        <div className='item-user-control' onClick={onLogout}><LogoutOutlined style={{ marginRight: '.3rem' }} />Logout</div>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
        </div>
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
          <Dropdown overlay={content} >
            <div className="user-control">
              <Avatar size={38} icon={<UserOutlined />} />
              <span className='user-control-name'>Hoang Binh An</span>
            </div>
          </Dropdown>
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
