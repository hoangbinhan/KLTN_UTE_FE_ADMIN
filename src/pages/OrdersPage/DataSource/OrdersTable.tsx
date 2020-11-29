//libs
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Tag, Tooltip } from "antd";
import moment from 'moment'
import {
    SyncOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined,
    ClockCircleOutlined,
    ExclamationCircleOutlined,
    DeliveredProcedureOutlined
} from '@ant-design/icons';
//components
import EditStatus from '../components/EditStatus'
//others
import CONSTANTS from '@/constants'
import { formatVND } from '@/utils'

export const columns = [
    {
        title: 'Customer',
        dataIndex: 'customerDetail',
        render: (customerDetail: any) => <Tooltip placement="top" title={`${customerDetail?.firstName} ${customerDetail?.lastName}`}>{customerDetail?.phoneNumber}</Tooltip>
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (status: string) => {
            switch (status) {
                case 'PENDING':
                    return <Tag icon={<SyncOutlined spin />} color="processing">
                        {status}
                    </Tag>
                case 'CANCELED':
                    return <Tag icon={<CloseCircleOutlined />} color="error">
                        {status}
                    </Tag>
                case 'CONFIRM':
                    return <Tag icon={<CheckCircleOutlined />} color="success">
                        {status}
                    </Tag>
                case 'SHIPPING':
                    return <Tag icon={<ClockCircleOutlined />} color="default">
                        {status}
                    </Tag>
                case 'REFUNDED':
                    return <Tag icon={<ExclamationCircleOutlined />} color="warning">
                        {status}
                    </Tag>
                case 'DELIVERED':
                    return <Tag icon={<DeliveredProcedureOutlined />} color="#36cfc9">
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
        dataIndex: 'total',
        render: (total: string) => formatVND(total, 'VND')
    },
    {
        title: 'Date Added',
        dataIndex: 'dateAdded',
        render: (time: any) => moment(time).format('DD/MM/YYYY, h:mm a')
    },
    {
        title: 'Date Modified',
        dataIndex: 'dateModified',
        render: (time: any) => moment(time).format('DD/MM/YYYY, h:mm a')
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (_: any, record: any) => (
            <>
                <Link to={`${CONSTANTS.ROUTERS.DETAIL_ORDER}/${record._id}`}>
                    <Button type='primary'>View</Button>
                </Link>
                <EditStatus id={record._id} status={record.status} />
            </>
        )
    }
]