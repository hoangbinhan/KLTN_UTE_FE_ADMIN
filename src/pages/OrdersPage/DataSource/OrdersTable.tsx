//libs
import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Tag } from "antd";
import moment from 'moment'
import {
  SyncOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
//others
import CONSTANTS from '@/constants'

export const columns = [
    {
        title: 'Order ID',
        dataIndex: '_id'
    },
    {
        title: 'Customer',
        dataIndex: 'customerDetail',
        render: (customerDetail:any, record: any)=>customerDetail[0]?.phoneNumber
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (status: string)=>{
            switch (status) {
                case 'PENDING':
                    return  <Tag icon={<SyncOutlined spin />} color="processing">
                                {status}
                            </Tag>            
                default:
                    return <Tag icon={<CheckCircleOutlined />} color="success">
                                {status}
                            </Tag>
            }
        }
    },
    {
        title: 'Total',
        dataIndex: 'total'
    },
    {
        title: 'Date Added',
        dataIndex: 'dateAdded',
        render: (time:any)=>moment(time).format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        title: 'Date Modified',
        dataIndex: 'dateModified',
        render: (time:any)=>moment(time).format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (_: any, record: any) => (
            <>
                <Link to={`${CONSTANTS.ROUTERS.DETAIL_ORDER}/${record._id}`}>
                    <Button type='primary'>View</Button>
                </Link>
                <Button style={{marginLeft: '1rem'}}>Edit Status</Button>
            </>
        )
    }
]