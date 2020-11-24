//libs
import React from 'react'
//components
import HeaderPage from '@/components/HeaderPage'
import OrdersTable from './components/OrdersTable'

const Orders = () => {
    return (
        <>
            <HeaderPage title='Orders' />
            <OrdersTable />
        </>
    )
}


export default Orders
