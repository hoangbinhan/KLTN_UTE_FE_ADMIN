//libs
import React from 'react'
import { Input, DatePicker } from 'antd'
//components
import ReviewModal from '../ReviewModal'
//others
import './style.scss'

const { Search } = Input
const { RangePicker } = DatePicker;

const ReviewsFilter = () => {
    return (
        <div className='reviews-filter-wrapper'>
            <div className="reviews-filter-control">
                <Search
                    placeholder='Search...'
                    onSearch={(value) => console.log(value)}
                    className='input-search'
                />
                <RangePicker />
            </div>
            <ReviewModal title='Add new' />
        </div>
    )
}



export default ReviewsFilter
