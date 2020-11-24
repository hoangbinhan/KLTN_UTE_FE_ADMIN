//libs
import React from 'react'
import { Tag, Button } from 'antd'
//components
import ModalCategoryChildren from '../components/ModalCategoryChildren'

export const columns = [
    {
        title: 'Children Name',
        dataIndex: 'childrenCategoryName'
    },
    {
        title: 'Url',
        dataIndex: 'link'
    },
    {
        title: 'Sort Order',
        dataIndex: 'sortOrder'
    },
    {
        title: 'Status',
        dataIndex: 'status'
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (_: any, record: any) => (
            // <ModalCategoryChildren record={{ ...record }} />
            <Button />
        ),
    },
]