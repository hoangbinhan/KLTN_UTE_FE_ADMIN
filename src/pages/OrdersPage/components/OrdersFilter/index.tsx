//libs
import React from 'react'
import { Select, Input, DatePicker, Button } from 'antd'
//others
import './style.scss'

const { Search } = Input;
const { Option } = Select
const { RangePicker } = DatePicker


const OrdersFilter: React.FC = (props) => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    }
    return (
        <div className='order-filter-wrapper'>
            <div className="order-filter-control">
                <Search
                    placeholder='Search...'
                    onSearch={(value) => console.log(value)}
                    className='input-search'
                />
                <RangePicker className='range-picker' />
                <Select defaultValue='all' style={{ width: 120 }} onChange={handleChange}>
                    <Option value='all'>All</Option>
                    <Option value='enable'>Enable</Option>
                    <Option value='disable'>Disable</Option>
                </Select>
            </div>
            <Button type='primary'>Add new</Button>
        </div>
    )
}


export default OrdersFilter
