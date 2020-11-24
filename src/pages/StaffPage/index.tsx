//libs
import React from 'react'
//components
import HeaderPage from '@/components/HeaderPage'
import StaffPageTable from './components/StaffPageTable'

const StaffPage = () => {
    return (
        <>
            <HeaderPage title='Staff Management' />
            <StaffPageTable/>
        </>
    )
}


export default StaffPage
