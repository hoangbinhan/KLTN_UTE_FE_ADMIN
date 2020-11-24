//libs
import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useDispatch } from 'react-redux'
import queryString from "query-string";
//components
import OrdersFilter from '../OrdersFilter'
//hooks
import { useTypedSelector, useRouter } from '@/hooks'
//action
import { fetchDataOrders } from '@/actions/Order/FetchDataOrders'
//others
import { columns } from '../../DataSource/OrdersTable'

const OrdersTable = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { listOrders, isLoading } = useTypedSelector(
        (state) => state.Order.FetchDataOrders
    )
    const { updateSuccess } = useTypedSelector(
        (state) => state.Order.UpdateStatusOrder
    )
    useEffect(() => {
        dispatch(fetchDataOrders({ params: router.query }))
    }, [dispatch, updateSuccess, router.query])

    const data = listOrders?.map((item: any) => {
        return { ...item, key: item._id }
    })
    return (
        <>
            <OrdersFilter />
            <Table columns={columns} dataSource={data} loading={isLoading} pagination={{
                // total: listProducts?.total,
                // pageSize: listProducts?.size,
                // current: listProducts?.page + 1,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "30", "50", "100"],
                onChange: (page, pageSize) => {
                    const currentParam = { ...router.query, page, size: pageSize };
                    router.push(
                        `${router.pathname}?${queryString.stringify(currentParam)}`
                    );
                },
            }} />
        </>
    )
}


export default OrdersTable
