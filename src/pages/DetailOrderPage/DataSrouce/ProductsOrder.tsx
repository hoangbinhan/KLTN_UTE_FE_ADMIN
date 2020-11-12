//libs
import React from 'react'
import { Space, InputNumber, Button, Image, Tag } from 'antd';

export const columnsProductInvoice = (handleChangeQuantity: Function, handleChangeDelete: Function) => [
    {
        title: 'Product Name',
        dataIndex: 'productName',
        key: 'productName',
        width: '30%'
    },
    {
        title: 'Model',
        dataIndex: 'model',
        key: 'model',
        render: (item: any) => <p>{item[0]?.categoryName}</p>,
        width: '15%'
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        render: ((quantity: number, record: any) => <InputNumber min={1} max={100} value={quantity} onChange={(value) => handleChangeQuantity(value, record)} />),
        width: '15%'
    },
    {
        title: 'Unit Price',
        dataIndex: 'price',
        key: 'price',
        width: '15%'
    },
    {
        title: 'Total Price',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
        render: (_: any, record: any) => <p>{parseInt(record.quantity) * parseFloat(record.price)}</p>,
        width: '15%'
    },
    {
        title: 'Action',
        key: 'action',
        render: (text: string, record: any) => (
            <Space size="middle">
                <Button type='primary' ghost danger onClick={(e: any) => handleChangeDelete(e, record)}>Delete</Button>
            </Space>
        ),
        width: '10%'
    },
];

export const columnsProducts = (handleAddProduct: Function) => [
    {
        title: 'ID',
        dataIndex: '_id',
    },
    {
        title: 'Image',
        dataIndex: 'image',
        render: (item: any) => <Image width={50} src={item[0]?.imageUrl} />
    },
    {
        title: 'Product Name',
        dataIndex: 'productName',
    },
    {
        title: 'Model',
        dataIndex: 'model',
        render: (item: any) => <p>{item[0]?.categoryName}</p>
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
        render: (text: string) => {
            if (text === "true") {
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
            <Button onClick={(e) => handleAddProduct(e, record)}>Add</Button>
        )
    },
];