//libs
import React from 'react';
import { Button } from 'antd';
//components
import ModalCategories from '../ModalCategories';

export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Icon',
    dataIndex: 'icon',
  },
  {
    title: 'Category Name',
    dataIndex: 'categoryName',
  },
  {
    title: 'Sort Order',
    dataIndex: 'age',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (_: any, record: any) => (
      <>
        <ModalCategories name='Edit' record={record} />
        <Button>Add Product Category</Button>
      </>
    ),
  },
];
