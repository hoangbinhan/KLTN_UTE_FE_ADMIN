//libs
import React, {useEffect} from 'react'
import { Table } from 'antd'
import { useDispatch } from 'react-redux'
//components
import OrdersFilter from '../OrdersFilter'
//hooks
import { useTypedSelector, useRouter } from '@/hooks'
//action
import {fetchDataOrders} from '@/actions/Order/FetchDataOrders'
//others
import { columns } from '../../DataSource/OrdersTable'

const OrdersTable = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {listOrders, isLoading} = useTypedSelector(
        (state)=>state.Order.FetchDataOrders
    )
    const {updateSuccess} = useTypedSelector(
        (state)=>state.Order.UpdateStatusOrder
    )    
    useEffect(() => {
        dispatch(fetchDataOrders({params: router.query}))
    }, [dispatch, updateSuccess, router.query])

    const data = listOrders?.map((item:any)=>{
        return {...item, key: item._id}
    })
    return (
        <>
            <OrdersFilter/>
            <Table columns={columns} dataSource={data} loading={isLoading}/>
        </>
    )
}


export default OrdersTable
