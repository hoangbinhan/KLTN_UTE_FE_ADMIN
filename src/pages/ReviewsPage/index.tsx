//libs
import React from 'react'
//components
import HeaderPage from '@/components/HeaderPage'
import ReviewsFilter from './Components/ReviewsFilter'
import ReviewsTable from './Components/ReviewsTable'

const ReviewsPage = () => {
    return (
        <>
            <HeaderPage title='Review' />
            <ReviewsFilter />
            <ReviewsTable />
        </>
    )
}


export default ReviewsPage
