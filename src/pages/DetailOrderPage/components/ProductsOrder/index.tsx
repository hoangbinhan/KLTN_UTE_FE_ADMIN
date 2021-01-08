//libs
import React, { useState, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Table, message } from 'antd';
import queryString from "query-string";
//control
import FilterControl from '@/components/FilterControl'
//other
import { columnsProductInvoice, columnsProducts } from '../../DataSrouce/ProductsOrder'
import './style.scss'
//context
import { DetailOrderContext } from '@/context/DetailOrderContext'
//hooks
import { useRouter, useTypedSelector } from '@/hooks';
//actions
import { fetchDataProducts } from '@/actions/Products/FetchDataProducts';

const ProductsOrder = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const [productsInvoice, setProductsInvoice] = useState<Array<any>>([])
    const { order, orderChange } = useContext(DetailOrderContext)
    const { listProducts, isLoading } = useTypedSelector(
        (state) => state.Products.FetchDataProducts
    );
    const paramOrder = router.query.id

    const handleAddProduct = (e: any, record: any) => {
        if (router.query.id) {
            return
        } else {
            if (record?.status === 'DISABLE' || record?.quantity <= 0) {
                message.warning('Cannot add because the product is out of stock or disable')
                return
            }
            else {
                let temp: any[] = [...productsInvoice]
                const item = { ...record, quantity: 1 }
                const isAdded = temp.filter((item: any) => item._id === record._id).length
                if (isAdded) {
                    const index = temp.findIndex(item => item._id === record._id)
                    if (temp[index]?.quantity >= record?.quantity) {
                        message.warning('Cannot add more product')
                        return
                    }
                    temp[index].quantity++
                } else {
                    temp.push(item)
                }
                setProductsInvoice([...temp])
                if (orderChange) {
                    orderChange({ productsInvoice: [...temp] })
                }
            }
        }
    }
    const handleChangeQuantity = (value: any, record: any) => {
        if (router.query.id) {
            return
        } else {
            let temp: any[] = [...productsInvoice]
            if (value >= record?.quantity) {
                message.warning('Cannot add more product')
                return
            }
            else {
                temp[temp.findIndex(item => item._id === record._id)].quantity = value
                setProductsInvoice([...temp])
                if (orderChange) {
                    orderChange({ productsInvoice: [...temp] })
                }
            }
        }
    }
    const handleChangeDelete = (e: any, record: any) => {
        if (router.query.id) {
            return
        } else {
            const temp: any[] = [...productsInvoice]
            const result = temp.filter((item: any) => item._id !== record._id)
            setProductsInvoice([...result])
            if (orderChange) {
                orderChange({ productsInvoice: [...result] })
            }
        }
    }
    useEffect(() => {
        dispatch(fetchDataProducts({ params: router.query }));
    }, [dispatch, router.query]);

    const data = listProducts?.data?.map((item: any) => {
        return { ...item, key: item._id }
    })
    return (
        <div className='product-orders-wrapper'>
            <Table columns={columnsProductInvoice(handleChangeQuantity, handleChangeDelete, paramOrder)} dataSource={order.productsInvoice ? order.productsInvoice : productsInvoice} pagination={false} />
            {!paramOrder && <>
                <h1>Add Products</h1>
                <FilterControl isSearch={true} />
                <Table columns={columnsProducts(handleAddProduct)} dataSource={data} loading={isLoading} pagination={{
                    total: listProducts?.total,
                    pageSize: listProducts?.size,
                    current: listProducts?.page + 1,
                    showSizeChanger: true,
                    pageSizeOptions: ["10", "20", "30", "50", "100"],
                    onChange: (page, pageSize) => {
                        const currentParam = { ...router.query, page, size: pageSize };
                        router.push(
                            `${router.pathname}?${queryString.stringify(currentParam)}`
                        );
                    }
                }} />
            </>}
        </div>
    )
}


export default ProductsOrder
