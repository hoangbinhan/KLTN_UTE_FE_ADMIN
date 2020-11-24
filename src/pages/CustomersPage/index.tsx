//libs
import React from 'react'

//components
import HeaderPage from '@/components/HeaderPage'
import CustomersTable from './components/CustomersTable'

const CustomersPage = () => {
    return (
        <>
            <HeaderPage title='Customers' />
            <CustomersTable/>
        </>
    )
}


export default CustomersPage
