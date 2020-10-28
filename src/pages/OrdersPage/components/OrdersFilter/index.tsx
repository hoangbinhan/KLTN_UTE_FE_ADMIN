//libs
import React from 'react'
import { Select, Input, DatePicker, Button } from 'antd'

const { Search } = Input;
const { Option } = Select


const OrdersFilter: React.FC = (props) => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    }
    return (
        <>
            <Button type='primary'>Add new</Button>
            <Search
                placeholder='Search...'
                onSearch={(value) => console.log(value)}
                style={{ width: 200 }}
            />
            <Select defaultValue='all' style={{ width: 120 }} onChange={handleChange}>
                <Option value='all'>All</Option>
                <Option value='enable'>Enable</Option>
                <Option value='disable'>Disable</Option>
            </Select>
            <DatePicker />
            <DatePicker />
        </>
    )
}


export default OrdersFilter
