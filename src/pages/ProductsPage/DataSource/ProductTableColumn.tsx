//libs
import React from 'react';
import { Tag, Image, Button } from 'antd'
import { Link } from 'react-router-dom'
//button
import ButtonDelete from '../components/ButtonDelete'

export const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render: (image: any) => <Image width={50} src={image[0].imageUrl} />
  },
  {
    title: 'Product Name',
    dataIndex: 'productName',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    render: (model: any) => model[0].categoryName
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status: string) => {
      if (status === 'true') {
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
        <ButtonDelete productId={record._id}/>
      </>
    )

  },
];