import React from 'react'
import { Tag } from 'antd'
//components
import ActionShippingMethod from '../components/ActionShippingMethod'

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
        dataIndex: 'status',
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
            <ActionShippingMethod record={record}/>
        )
    }
]