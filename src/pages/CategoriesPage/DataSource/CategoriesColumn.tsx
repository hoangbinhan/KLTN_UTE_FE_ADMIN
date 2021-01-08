//libs
import React from 'react';
import { Tag, Image } from 'antd'
//components
import ActionCategories from '../components/ActionCategories';

export const columns = [
  {
    title: 'Icon',
    dataIndex: 'imageUrl',
    render: (url: string) => <Image width={50} src={url} />
  },
  {
    title: 'Category Name',
    dataIndex: 'categoryName',
  },
  {
    title: 'Sort Order',
    dataIndex: 'sortOrder',
    sorter: (a: any, b: any) => parseInt(a.sortOrder) - parseInt(b.sortOrder),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (text: string) => {
      if (text === 'ACTIVE') {
        return <Tag color='green'>{text}</Tag>
      } else {
        return <Tag color='red'>{text}</Tag>
      }
    }
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (_: any, record: any) => (
      <ActionCategories record={{ ...record }} />
    ),
  },
];
