//libs
import React, {useEffect} from 'react'
import { Table } from 'antd'
import { useDispatch } from 'react-redux'
//components
import OrdersFilter from '../OrdersFilter'
//hooks
import { useTypedSelector } from '@/hooks'
//action
import {fetchDataOrders} from '@/actions/Order/FetchDataOrders'
//others
import { columns } from '../../DataSource/OrdersTable'
import {formatVND} from '@/utils'

const OrdersTable = () => {
    const dispatch = useDispatch()
    const {listOrders, isLoading} = useTypedSelector(
        (state)=>state.Order.FetchDataOrders
    )    
    useEffect(() => {
        dispatch(fetchDataOrders())
    }, [dispatch])
    const data = listOrders?.map((item:any)=>{
        return {...item, key: item._id, total: formatVND(item.total, 'VND')}
    })
    return (
        <>
            <OrdersFilter/>
            <Table columns={columns} dataSource={data} loading={isLoading}/>
        </>
    )
}


export default OrdersTable
