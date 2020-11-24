//libs
import React from 'react'
import { Table } from 'antd'
//others
import { columns } from '../../DataSource/ReviewsTable'

const ReviewsTable = () => {
    const data = [
        {
            product: '1',
            author: 'John Brown',
            rating: 32,
            Status: 'New York No. 1 Lake Park',
        }

    ];
    return (
        <Table columns={columns} dataSource={data} />
    )
}


export default ReviewsTable
