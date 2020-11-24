//libs
import React from 'react';
import { Tag } from 'antd'

export const columns = [
  {
    title: 'Status',
    dataIndex: 'status',
    render: (text:string)=> {
        if(text==='ACTIVE'){
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
  },
  {
    title: 'Role',
    dataIndex: 'role',
  },
  {
    title: 'Date Added',
    dataIndex: 'dateAdded'
  }
];
