import React from 'react'
import { Button } from 'antd'

export const columns = [
    {
        title: 'Product',
        dataIndex: 'product'
    },
    {
        title: 'Author',
        dataIndex: 'author'
    },
    {
        title: 'Rating',
        dataIndex: 'rating'
    },
    {
        title: 'Status',
        dataIndex: 'Status'
    },
    {
        title: 'Date Added',
        dataIndex: 'dataAdded'
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (_: any, record: any) => (
            <Button type='primary'>Edit</Button>
        )
    }
]