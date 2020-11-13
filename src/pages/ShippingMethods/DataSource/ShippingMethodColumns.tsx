import React from 'react'
import { Button, Tag } from 'antd'

export const columns = [
    {
        title: 'id',
        dataIndex: '_id'
    },
    {
        title: 'Shipping Method',
        dataIndex: 'shippingMethod'
    },
    {
        title: 'Shipping Fee',
        dataIndex: 'shippingFee'
    },
    {
        title: 'Status',
        dataIndex: 'Status',
        render: (text:string)=>{
            if(text==='ACTIVE'){
                return <Tag color='green'>{text}</Tag>
            }else{
                return <Tag color='red'>{text}</Tag>
            }
        }
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (_: any, record: any) => (
            <>
                <Button>Edit</Button>
            </>
        )
    }
]