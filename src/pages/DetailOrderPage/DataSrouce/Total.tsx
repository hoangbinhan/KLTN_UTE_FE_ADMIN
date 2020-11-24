import React from 'react'
import {Tag} from 'antd'
import {formatVND} from '@/utils'

export const columnsOrderDetails = [
    {
        title: ' Order Details',
        dataIndex: 'orderDetail',
        key: 'orderDetail',
    },
];

export const columnsCustomerDetails = [
    {
        title: 'Customer Details',
        dataIndex: 'customerDetails',
        key: 'customerDetails',
    },
];

export const columnsOrderItems = [
    {
        title: 'Product',
        key: 'productName',
        dataIndex: 'productName',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Unit Price',
        dataIndex: 'price',
        key: 'price',
        render: (price: string)=>formatVND(price, 'VND')
    },
    {
        title: 'Total Price',
        render: (_:any, record: any)=>(
            <Tag color="geekblue">{formatVND((parseFloat(record.price)*parseInt(record.quantity)).toString(), 'VND')}</Tag>
        )
    },
]