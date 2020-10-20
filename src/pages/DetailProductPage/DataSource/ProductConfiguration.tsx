//libs
import React from 'react';
import { Button } from 'antd';

export const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Info',
    dataIndex: 'info',
  },
  {
    title: 'action',
    render: () => <Button type='primary'>Delete</Button>,
  },
];
