//libs
import React from 'react'
//components
import HeaderPage from '@/components/HeaderPage'
import OrdersFilter from './components/OrdersFilter'
import OrdersTable from './components/OrdersTable'

const Orders = () => {
    return (
        <>
            <HeaderPage title='Orders' />
            <OrdersFilter />
            <OrdersTable />
        </>
    )
}


export default Orders
