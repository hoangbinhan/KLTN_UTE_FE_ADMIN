//libs
import React from 'react'
import { Table } from 'antd'
//components
//others
import { columns } from '../../DataSource/OrdersTable'

const OrdersTable = () => {
    return (
        <>
            <Table columns={columns} dataSource={[]} />
        </>
    )
}


export default OrdersTable
