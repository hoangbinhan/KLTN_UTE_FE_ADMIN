//libs
import React from 'react'
import { Space, InputNumber, Button } from 'antd';

export const columnsProductInvoice = (handleChangeQuantity:Function, handleChangeDelete: Function) => [
    {
        title: 'Product Name',
        dataIndex: 'productName',
        key: 'productName',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        //TODO: FIX HERE
        render: ((quantity: number, record: any) => <InputNumber min={1} max={100} value={quantity} onChange={(value) => handleChangeQuantity(value, record)} />)
    },
    {
        title: 'Unit Price',
        dataIndex: 'unitPrice',
        key: 'unitPrice'
    },
    {
        title: 'Total Price',
        dataIndex: 'totalPrice',
        key: 'totalPrice'
    },
    {
        title: 'Action',
        key: 'action',
        render: (text: string, record: any) => (
            <Space size="middle">
                <Button type='primary' ghost danger onClick={(e:any)=>handleChangeDelete(e, record)}>Delete</Button>
            </Space>
        ),
    },
];

export const columnsProducts = (handleAddProduct: Function) => [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Image',
        dataIndex: 'image',
    },
    {
        title: 'Product Name',
        dataIndex: 'productName',
    },
    {
        title: 'Model',
        dataIndex: 'model',
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
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (_: any, record: any) => (
            <Button onClick={(e) => handleAddProduct(e, record)}>Add</Button>
        )
    },
];