//libs
import React from 'react';
import { Table } from 'antd';
//others
import { columns } from '../../DataSrouce/ColumnRecentTransaction'

const RecentTransaction = () => {
  const data = [
    {
      key: '1',
      status: 'pending',
      invoice: 'HD-001',
      customerName: 'BinhAn',
      products: 'RTX 3090',
      categories: 'card man hinh',
      shipping: '100',
      amount: '12000',
    },
    {
      key: '1',
      status: 'pending',
      invoice: 'HD-001',
      customerName: 'BinhAn',
      products: 'RTX 3090',
      categories: 'card man hinh',
      shipping: '100',
      amount: '12000',
    },
    {
      key: '1',
      status: 'pending',
      invoice: 'HD-001',
      customerName: 'BinhAn',
      products: 'RTX 3090',
      categories: 'card man hinh',
      shipping: '100',
      amount: '12000',
    },
    {
      key: '1',
      status: 'pending',
      invoice: 'HD-001',
      customerName: 'BinhAn',
      products: 'RTX 3090',
      categories: 'card man hinh',
      shipping: '100',
      amount: '12000',
    },
    {
      key: '1',
      status: 'pending',
      invoice: 'HD-001',
      customerName: 'BinhAn',
      products: 'RTX 3090',
      categories: 'card man hinh',
      shipping: '100',
      amount: '12000',
    },
    {
      key: '1',
      status: 'pending',
      invoice: 'HD-001',
      customerName: 'BinhAn',
      products: 'RTX 3090',
      categories: 'card man hinh',
      shipping: '100',
      amount: '12000',
    },

  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      title={() => 'Header'}
      className='recent-transaction-wrapper'
    />
  );
};

export default RecentTransaction;
