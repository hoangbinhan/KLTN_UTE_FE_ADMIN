//libs
import React from 'react'
import { Space, InputNumber } from 'antd';

export const columnsProductInvoice = [
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
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
        render: (() => <InputNumber min={1} max={100} defaultValue={1} />)
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
                <p>Delete</p>
            </Space>
        ),
    },
];

export const columnsProducts = [
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
    },
];