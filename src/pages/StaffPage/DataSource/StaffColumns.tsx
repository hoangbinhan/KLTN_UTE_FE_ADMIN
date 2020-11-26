//libs
import React from 'react';
import { Tag } from 'antd'
import moment from 'moment'

export const columns = [
  {
    title: 'Status',
    dataIndex: 'status',
    render: (text: string) => {
      if (text === 'ACTIVE') {
        return <Tag color='green'>{text}</Tag>
      }
      else {
        return <Tag color='red'>{text}</Tag>
      }
    }
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Employee Code',
    dataIndex: '_id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (_: any, record: any) => `${record.firstName} ${record.lastName}`
  },
  {
    title: 'Role',
    dataIndex: 'role',
  },
  {
    title: 'Date Added',
    dataIndex: 'dateAdded',
    render: (date: any) => moment(date).format('DD/MM/YYYY hh:mm a')
  }
];
