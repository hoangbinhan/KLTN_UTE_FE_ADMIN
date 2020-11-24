//import libs
import HeaderPage from '@/components/HeaderPage'
import React from 'react'
//components
import DetailOrderTab from './components/DetailOrderTab'
//context
import {DetailOrderProvider} from '@/context/DetailOrderContext'

const DetailOrderPage = () => {
    return (
            <DetailOrderProvider>
                <HeaderPage title='Detail Order' />
                <DetailOrderTab />
            </DetailOrderProvider>
    )
}


export default DetailOrderPage
