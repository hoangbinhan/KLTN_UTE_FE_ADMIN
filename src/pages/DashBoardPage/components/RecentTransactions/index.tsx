//libs
import React from 'react';
import { Table, Tag } from 'antd';

const RecentTransaction = () => {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'key',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Invoice',
      dataIndex: 'invoice',
    },
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
    },
    {
      title: 'Products',
      dataIndex: 'products',
    },
    {
      title: 'Categories',
      dataIndex: 'categories',
    },
    {
      title: 'Shipping',
      dataIndex: 'shipping',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
  ];

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
  ];
  return (
    <div className='recent-transaction-wrapper'>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => 'Header'}
      />
    </div>
  );
};

export default RecentTransaction;
