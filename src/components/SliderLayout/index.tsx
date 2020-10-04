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
import { SubCatalog, SubSales, SubCustomers } from './DataSource/menuItems';
import { renderListSubMenu } from '../../utils/Dashboard';
import DashBoardPage from '../../pages/DashBoardPage';
import CategoriesPage from '../../pages/CategoriesPage';

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
            {renderListSubMenu(SubCatalog)}
          </SubMenu>
          <SubMenu key='sub3' icon={<ShoppingCartOutlined />} title='Sales'>
            {renderListSubMenu(SubSales)}
          </SubMenu>
          <SubMenu key='sub4' icon={<UserOutlined />} title='Customers'>
            {renderListSubMenu(SubCustomers)}
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
            backgroundColor: 'none',
          }}
        >
          {/* <DashBoardPage /> */}
          <CategoriesPage />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SliderLayout;
