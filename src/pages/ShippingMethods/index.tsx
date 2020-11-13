//libs
import React from 'react'
//components
import HeaderPage from '@/components/HeaderPage'
import ShippingMethodsTable from './components/ShippingMethodsTable'

const ShippingMethods = () => {
    return (
        <>
            <HeaderPage title='Shipping method'/>
            <ShippingMethodsTable/>
        </>
    )
}

export default ShippingMethods
