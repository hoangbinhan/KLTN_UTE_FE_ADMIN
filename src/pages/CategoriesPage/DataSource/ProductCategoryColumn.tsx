//libs
import React from 'react';
import { Button } from 'antd';

export const ProductCategoryColumn = [
  {
    title: 'Product Category Name',
    dataIndex: 'productCategoryName',
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
        <Button>Edit</Button>
      </>
    ),
  },
];
