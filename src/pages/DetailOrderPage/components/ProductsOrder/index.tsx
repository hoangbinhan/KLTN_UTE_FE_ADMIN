//libs
import React from 'react'
import { Table, Input } from 'antd';
//other
import { columnsProductInvoice, columnsProducts } from '../../DataSrouce/ProductsOrder'

const { Search } = Input;

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const ProductsOrder = () => {
    return (
        <>
            <Table columns={columnsProductInvoice} dataSource={data} />
            <h1>Add Products</h1>
            <Search
                placeholder='Search...'
                onSearch={(value) => console.log(value)}
                style={{ width: 200 }}
            />
            <Table columns={columnsProducts} dataSource={data} />
        </>
    )
}


export default ProductsOrder
