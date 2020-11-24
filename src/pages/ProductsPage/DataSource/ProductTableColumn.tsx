//libs
import React from 'react';
import { Tag, Button } from 'antd'
import { Link } from 'react-router-dom'
//button
import ButtonDelete from '../components/ButtonDelete'
import { formatVND, randomColor } from '@/utils'
//others

export const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
  },

  {
    title: 'Product Name',
    dataIndex: 'productName',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    render: (category: any) => category?.map((item: any) => <Tag color={randomColor()}>{item}</Tag>)
  },
  {
    title: 'Price',
    dataIndex: 'price',
    render: (price: string) => formatVND(price, 'VND')
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status: string) => {
      if (status === 'ACTIVE') {
        return <Tag color='green'>ACTIVE</Tag>
      } else {
        return <Tag color='red'>DISABLE</Tag>
      }
    }
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (_: any, record: any) => (
      <>
        <Link to={`/detail-product/${record._id}`} style={{ marginRight: 15 }}>
          <Button type='primary'>Edit</Button>
        </Link>
        <ButtonDelete productId={record._id} />
      </>
    )

  },
];