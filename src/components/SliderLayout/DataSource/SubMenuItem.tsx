// libs
import React from 'react';
// others
import CONSTANTS from '@/constants';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export const SubCatalog = [
  {
    id: 'Categories',
    contentMenu: 'Categories',
    linkMenu: CONSTANTS.ROUTERS.CATEGORIES,
    get component() {
      return (
        <Menu.Item key={this.id}>
          <Link to={this.linkMenu}>{this.contentMenu}</Link>
        </Menu.Item>
      );
    },
  },
  {
    id: 'Products',
    contentMenu: 'Products',
    linkMenu: CONSTANTS.ROUTERS.PRODUCTS,
    get component() {
      return (
        <Menu.Item key={this.id}>
          <Link to={this.linkMenu}>{this.contentMenu}</Link>
        </Menu.Item>
      );
    },
  },
  // {
  //   id: 'Manufacturers',
  //   contentMenu: 'Manufacturers',
  //   linkMenu: CONSTANTS.ROUTERS.MANUFACTURERS,
  //   get component() {
  //     return (
  //       <Menu.Item key={this.id}>
  //         <Link to={this.linkMenu}>{this.contentMenu}</Link>
  //       </Menu.Item>
  //     );
  //   },
  // },
  // {
  //   id: 'Reviews',
  //   contentMenu: 'Reviews',
  //   linkMenu: CONSTANTS.ROUTERS.REVIEWS,
  //   get component() {
  //     return (
  //       <Menu.Item key={this.id}>
  //         <Link to={this.linkMenu}>{this.contentMenu}</Link>
  //       </Menu.Item>
  //     );
  //   },
  // },
  // {
  //   id: 'Information',
  //   contentMenu: 'Information',
  //   linkMenu: CONSTANTS.ROUTERS.INFORMATION,
  //   get component() {
  //     return (
  //       <Menu.Item key={this.id}>
  //         <Link to={this.linkMenu}>{this.contentMenu}</Link>
  //       </Menu.Item>
  //     );
  //   },
  // },
];

export const SubSales = [
  {
    id: 'Orders',
    contentMenu: 'Orders',
    linkMenu: CONSTANTS.ROUTERS.ORDERS,
    get component() {
      return (
        <Menu.Item key={this.id}>
          <Link to={this.linkMenu}>{this.contentMenu}</Link>
        </Menu.Item>
      );
    },
  },
  // {
  //   id: 'Recurring Orders',
  //   contentMenu: 'Recurring Orders',
  //   linkMenu: CONSTANTS.ROUTERS.RECURRING_ORDERS,
  //   get component() {
  //     return (
  //       <Menu.Item key={this.id}>
  //         <Link to={this.linkMenu}>{this.contentMenu}</Link>
  //       </Menu.Item>
  //     );
  //   },
  // },
  // {
  //   id: 'Product Returns',
  //   contentMenu: 'Product Returns',
  //   linkMenu: CONSTANTS.ROUTERS.PRODUCT_RETURNS,
  //   get component() {
  //     return (
  //       <Menu.Item key={this.id}>
  //         <Link to={this.linkMenu}>{this.contentMenu}</Link>
  //       </Menu.Item>
  //     );
  //   },
  // },
  // {
  //   id: 'Gift Vouchers',
  //   contentMenu: 'Gift Vouchers',
  //   linkMenu: CONSTANTS.ROUTERS.GIFT_VOUCHERS,
  //   get component() {
  //     return (
  //       <Menu.Item key={this.id}>
  //         <Link to={this.linkMenu}>{this.contentMenu}</Link>
  //       </Menu.Item>
  //     );
  //   },
  // },
  {
    id: 'Shipping Methods',
    contentMenu: 'Shipping Methods',
    linkMenu: CONSTANTS.ROUTERS.SHIPPING_METHODS,
    get component() {
      return (
        <Menu.Item key={this.id}>
          <Link to={this.linkMenu}>{this.contentMenu}</Link>
        </Menu.Item>
      );
    },
  },
];

export const SubCustomers = [
  {
    id: 'Customers',
    contentMenu: 'Customers',
    linkMenu: CONSTANTS.ROUTERS.CUSTOMERS,
    get component() {
      return (
        <Menu.Item key={this.id}>
          <Link to={this.linkMenu}>{this.contentMenu}</Link>
        </Menu.Item>
      );
    },
  },
  {
    id: 'Staff',
    contentMenu: 'Staff',
    linkMenu: CONSTANTS.ROUTERS.STAFF,
    get component() {
      return (
        <Menu.Item key={this.id}>
          <Link to={this.linkMenu}>{this.contentMenu}</Link>
        </Menu.Item>
      );
    },
  },
];
