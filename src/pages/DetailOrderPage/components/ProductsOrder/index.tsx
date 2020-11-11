//libs
import React, { useState } from 'react'
import { Table, Input, message } from 'antd';
//other
import { columnsProductInvoice, columnsProducts } from '../../DataSrouce/ProductsOrder'
import './style.scss'

const { Search } = Input;

const data = [
    {
        key: '1',
        id: '1',
        image: '',
        productName: 'SP1',
        model: 'CPU',
        price: '123',
        quantity: '10',
        status: 'ACTIVE',
    },
    {
        key: '2',
        id: '2',
        image: '',
        productName: 'SP1',
        model: 'CPU',
        price: '123',
        quantity: '10',
        status: 'ACTIVE',
    },
    {
        key: '3',
        id: '3',
        image: '',
        productName: 'SP1',
        model: 'CPU',
        price: '123',
        quantity: '10',
        status: 'ACTIVE',
    },
];

const ProductsOrder = () => {
    const [productsInvoice, setProductsInvoice] = useState<Array<any>>([])
    const handleAddProduct = (e: any, value: any) => {
        let temp: any[] = [...productsInvoice]
        const item = { ...value, quantity: 1 }
        const isAdded = temp.filter((item: any) => item.id === value.id).length
        if (isAdded) {
            temp[temp.findIndex(item => item.id === value.id)].quantity++
        } else {
            temp.push(item)
        }
        setProductsInvoice([...temp])
    }
    return (
        <div className='product-orders-wrapper'>
            <Table columns={columnsProductInvoice} dataSource={productsInvoice} pagination={false} />
            <h1>Add Products</h1>
            <Search
                placeholder='Search...'
                onSearch={(value) => console.log(value)}
                className='input-search'
            />
            <Table columns={columnsProducts(handleAddProduct)} dataSource={data} />
        </div>
    )
}


export default ProductsOrder
