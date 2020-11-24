//libs
import React from 'react';

//components
import ActionCustomer from '../components/ActionCustomer'

export const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (_: any, record: any) => (
      <ActionCustomer record={{ ...record }} />
    )
  }
];
