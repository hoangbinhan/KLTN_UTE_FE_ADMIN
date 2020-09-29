//libs
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

//others
import './style.scss';
// import {renderListSubMenu} from '@/'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const SliderLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            Dashboard
          </Menu.Item>
          <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Catalog'>
            <Menu.Item key='2'>Categories</Menu.Item>
            <Menu.Item key='3'>Products</Menu.Item>
            <Menu.Item key='4'>Manufacturers</Menu.Item>
            <Menu.Item key='5'>Reviews</Menu.Item>
            <Menu.Item key='6'>Information</Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' icon={<ShoppingCartOutlined />} title='Sales'>
            <Menu.Item key='7'>Orders</Menu.Item>
            <Menu.Item key='8'>Recurring Orders</Menu.Item>
            <Menu.Item key='9'>Product Returns</Menu.Item>
            <Menu.Item key='10'>Gift Vouchers</Menu.Item>
          </SubMenu>
          <SubMenu key='sub4' icon={<UserOutlined />} title='Customers'>
            <Menu.Item key='11'>Customers</Menu.Item>
            <Menu.Item key='12'>Customer Group</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 'auto',
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default SliderLayout;
