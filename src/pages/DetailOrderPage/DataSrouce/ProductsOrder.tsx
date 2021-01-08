//libs
import React from 'react'
import { Space, InputNumber, Button, Tag } from 'antd';
import { formatVND, randomColor } from '@/utils'


export const columnsProductInvoice = (handleChangeQuantity: Function, handleChangeDelete: Function, paramOrder: String) => [
    {
        title: 'Product Name',
        dataIndex: 'productName',
        key: 'productName',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        render: ((quantity: number, record: any) => <InputNumber min={1} max={100} value={quantity} onChange={(value) => handleChangeQuantity(value, record)} />),
    },
    {
        title: 'Unit Price',
        dataIndex: 'price',
        key: 'price',
        render: (price: string) => formatVND(price, 'VND')
    },
    {
        title: 'Total Price',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
        render: (_: any, record: any) => {
            const result = parseInt(record.quantity) * parseFloat(record.price)
            return formatVND(result.toString(), 'VND')
        },
    },
    {
        title: 'Action',
        key: 'action',
        render: (text: string, record: any) => {
            if (paramOrder) {
                return <></>
            }
            return (
                <Space size="middle" >
                    <Button type='primary' ghost danger onClick={(e: any) => handleChangeDelete(e, record)}>Delete</Button>
                </Space >
            )
        }
    }
];

export const columnsProducts = (handleAddProduct: Function) => [
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
        render: (text: string) => {
            if (text === "ACTIVE") {
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
            <Button onClick={(e) => handleAddProduct(e, record)}>Add</Button>
        )
    },
];