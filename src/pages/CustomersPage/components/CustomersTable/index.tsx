//libs
import React from 'react'
import {Table} from 'antd'
//components
import CustomersControl from '../CustomersControl'
//others
import {columns} from '../../DataSource/CustomersColumn'

const CustomersTable = () => {
    return (
        <>
            <CustomersControl/>
            <Table columns={columns} dataSource={[]} />
        </>
    )
}


export default CustomersTable
