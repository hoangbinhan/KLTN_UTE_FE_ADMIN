//Libs
import React from 'react';
import { Table } from 'antd';
import CategoriesControl from '../CategoriesControl';

const CategoriesTable = () => {
  const columns = [
    {
      title: 'Category Name',
      dataIndex: 'name',
    },
    {
      title: 'Sort Order',
      dataIndex: 'age',
    },
    {
      title: 'Action',
      dataIndex: 'address',
    },
  ];
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <>
      <CategoriesControl />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default CategoriesTable;
