//libs
import React from 'react';
import { Tag, Image } from 'antd'
//components
import ActionCategories from '../components/ActionCategories';

export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
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
    title: 'Url',
    dataIndex: 'link'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (_: any, record: any) => (
      <ActionCategories record={{ ...record }} />
    ),
  },
];
