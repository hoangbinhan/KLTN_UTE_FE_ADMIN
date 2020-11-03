//libs
import React from 'react';
//components
import ActionCategories from '../components/ActionCategories';

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
      <ActionCategories record={record} />
    ),
  },
];
