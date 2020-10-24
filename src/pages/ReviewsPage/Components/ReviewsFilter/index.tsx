//libs
import React from 'react'
import { Input, DatePicker } from 'antd'
//components
import ReviewModal from '../ReviewModal'

const { Search } = Input
const { RangePicker } = DatePicker;

const ReviewsFilter = () => {
    return (
        <>
            <ReviewModal title='Add new' />
            <Search
                placeholder='Search...'
                onSearch={(value) => console.log(value)}
                style={{ width: 200 }}
            />
            <RangePicker />
        </>
    )
}



export default ReviewsFilter
