import React from 'react'
import moment from 'moment'
import { formatVND } from '@/utils'

export const columns = [
    {
        title: 'Key',
        dataIndex: '_id',
        render: (text: string) => <p>{text.slice(0, 7)}</p>
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Customer',
        dataIndex: 'customer',
        render: (text: string) => <p>{text.slice(0, 10)}</p>
    },
    {
        title: 'total',
        dataIndex: 'total',
        render: (text: string) => <p>{formatVND(text, 'VND')}</p>
    },
    {
        title: 'Create At',
        dataIndex: 'dateAdded'
        ,
        render: (text: string) => <p>{moment(text).format('DD/MM/YYYY HH:mm:ss a')}</p>
    }
];