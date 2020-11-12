//libs
import React, { useState, useContext } from 'react'
import { Table, Input } from 'antd';
//other
import { columnsProductInvoice, columnsProducts } from '../../DataSrouce/ProductsOrder'
import './style.scss'
//context
import {DetailOrderContext} from '@/context/DetailOrderContext'

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
    const {orderChange} = useContext(DetailOrderContext)

    const handleAddProduct = (e: any, record: any) => {
        let temp: any[] = [...productsInvoice]
        const item = { ...record, quantity: 1 }
        const isAdded = temp.filter((item: any) => item.id === record.id).length
        if (isAdded) {
            temp[temp.findIndex(item => item.id === record.id)].quantity++
        } else {
            temp.push(item)
        }
        setProductsInvoice([...temp])
        if(orderChange){
            orderChange({productsInvoice:[...temp]})
        }
    }
    const handleChangeQuantity = (value:any, record:any)=>{
        let temp: any[] = [...productsInvoice]
        temp[temp.findIndex(item => item.id === record.id)].quantity=value
        setProductsInvoice([...temp])
        if(orderChange){
            orderChange({productsInvoice:[...temp]})
        }
    }
    const handleChangeDelete = (e:any, record:any)=>{
        const temp: any[] = [...productsInvoice]
        const result =  temp.filter((item:any)=>item.id!==record.id)
        setProductsInvoice([...result])
        if(orderChange){
            orderChange({productsInvoice:[...result]})
        }
    }
    return (
        <div className='product-orders-wrapper'>
            <Table columns={columnsProductInvoice(handleChangeQuantity, handleChangeDelete)} dataSource={productsInvoice} pagination={false} />
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
