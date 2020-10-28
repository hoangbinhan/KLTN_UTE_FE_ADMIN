import React from 'react'
import { Button } from "antd";

export const columns = [
    {
        title: 'Order ID',
        dataIndex: 'orderID'
    },
    {
        title: 'Customer',
        datIndex: 'customer'
    },
    {
        title: 'Status',
        datIndex: 'status'
    },
    {
        title: 'Total',
        dataIndex: 'total'
    },
    {
        title: 'Date Added',
        dataIndex: 'dateAdded'
    },
    {
        title: 'Date Modified',
        dataIndex: 'dateModified'
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (_: any, record: any) => (
            <Button type='primary'>View</Button>
        )
    }
]