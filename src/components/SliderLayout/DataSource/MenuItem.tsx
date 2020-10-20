// libs
import React from 'react';
import {
  AppstoreOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
//others
import CONSTANTS from '@/constants';
import { SubCatalog, SubSales, SubCustomers } from './SubMenuItem';
import { renderListSubMenu } from '@/utils/Dashboard';

const { SubMenu } = Menu;

export const MenuItem = [
  {
    id: 'Dashboard',
    contentMenu: 'Dashboard',
    iconMenu: <DashboardOutlined />,
    get component() {
      return (
        <Menu.Item key={this.id} icon={this.iconMenu}>
          <Link to={CONSTANTS.ROUTERS.DASHBOARD}>{this.contentMenu}</Link>
        </Menu.Item>
      );
    },
  },
  {
    id: 'Catalog',
    contentMenu: 'Catalog',
    iconMenu: <AppstoreOutlined />,
    get component() {
      return (
        <SubMenu key={this.id} icon={this.iconMenu} title={this.contentMenu}>
          {renderListSubMenu(SubCatalog)}
        </SubMenu>
      );
    },
  },
  {
    id: 'Sales',
    contentMenu: 'Sales',
    iconMenu: <ShoppingCartOutlined />,
    get component() {
      return (
        <SubMenu key={this.id} icon={this.iconMenu} title={this.contentMenu}>
          {renderListSubMenu(SubSales)}
        </SubMenu>
      );
    },
  },
  {
    id: 'Customers',
    contentMenu: 'Customers',
    iconMenu: <UserOutlined />,
    get component() {
      return (
        <SubMenu key={this.id} icon={this.iconMenu} title={this.contentMenu}>
          {renderListSubMenu(SubCustomers)}
        </SubMenu>
      );
    },
  },
];
