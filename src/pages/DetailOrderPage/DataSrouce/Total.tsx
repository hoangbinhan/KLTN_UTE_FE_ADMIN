import React from 'react'

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
    },
    {
        title: 'Total Price',
        render: (_:any, record: any)=>(
            <p>{parseFloat(record.price)*parseInt(record.quantity)}</p>
        )
    },
]