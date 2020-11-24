//libs
import React from 'react';
import { Table, Button } from 'antd';
//others
import './style.scss'

const NewOrders = () => {
  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Customers',
      dataIndex: 'customer',
    },
    {
      title: 'Total',
      dataIndex: 'toal',
    },
  ];

  let data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      key: i,
      Product: `iphone X`,
      Customers: `John`,
      address: `${i}`,
    });
  }
  return (
    <div className='new-orders-wrapper'>
      <Button type='primary'>Reload</Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default NewOrders;
