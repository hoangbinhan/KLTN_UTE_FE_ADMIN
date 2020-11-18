//libs
import React, { useState, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Table, Input } from 'antd';
//other
import { columnsProductInvoice, columnsProducts } from '../../DataSrouce/ProductsOrder'
import './style.scss'
//context
import { DetailOrderContext } from '@/context/DetailOrderContext'
//hooks
import { useTypedSelector } from '@/hooks';
//actions
import { fetchDataProducts } from '@/actions/Products/FetchDataProducts';

const { Search } = Input;

const ProductsOrder = () => {
    const dispatch = useDispatch();
    const [productsInvoice, setProductsInvoice] = useState<Array<any>>([])
    const { order, orderChange } = useContext(DetailOrderContext)
    const { listProducts, isLoading } = useTypedSelector(
        (state) => state.Products.FetchDataProducts
    );
    const handleAddProduct = (e: any, record: any) => {
        if(order.productsInvoice){
            return
        }else{
            let temp: any[] = [...productsInvoice]
            const item = { ...record, quantity: 1 }
            const isAdded = temp.filter((item: any) => item._id === record._id).length
            if (isAdded) {
                temp[temp.findIndex(item => item._id === record._id)].quantity++
            } else {
                temp.push(item)
            }
            setProductsInvoice([...temp])
            if (orderChange) {
                orderChange({ productsInvoice: [...temp] })
            }
        }
    }
    const handleChangeQuantity = (value: any, record: any) => {
        if(order.productsInvoice){
            return
        }else{
            let temp: any[] = [...productsInvoice]
            temp[temp.findIndex(item => item._id === record._id)].quantity = value
            setProductsInvoice([...temp])
            if (orderChange) {
                orderChange({ productsInvoice: [...temp] })
            }
        }
    }
    const handleChangeDelete = (e: any, record: any) => {
        if(order.productsInvoice){
            return
        }else{
            const temp: any[] = [...productsInvoice]
            const result = temp.filter((item: any) => item._id !== record._id)
            setProductsInvoice([...result])
            if (orderChange) {
                orderChange({ productsInvoice: [...result] })
            }
        }
    }
    
    useEffect(() => {
        dispatch(fetchDataProducts());
    }, [dispatch]);
    const data = listProducts?.map((item: any) => {
        return { ...item, key: item._id }
    })

    return (
        <div className='product-orders-wrapper'>
            <Table columns={columnsProductInvoice(handleChangeQuantity, handleChangeDelete)} dataSource={order.productsInvoice ? order.productsInvoice : productsInvoice} pagination={false} />
            <h1>Add Products</h1>
            <Search
                placeholder='Search...'
                onSearch={(value) => console.log(value)}
                className='input-search'
            />
            <Table columns={columnsProducts(handleAddProduct)} dataSource={data} loading={isLoading} />
        </div>
    )
}


export default ProductsOrder
