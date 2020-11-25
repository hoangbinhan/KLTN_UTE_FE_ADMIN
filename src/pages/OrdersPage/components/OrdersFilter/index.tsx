//libs
import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
//components
import FilterControl from '@/components/FilterControl'
//others
import './style.scss'



const OrdersFilter: React.FC = () => {
    const options:string[] = ['ALL', 'PENDING', 'CONFIRM', 'SHIPPING', 'CANCELED', 'REFUNDED', 'DELIVERED']
    return (
        <div className='order-filter-wrapper'>
            <FilterControl isSearch={true} isStatus={options} isDate={true} isPrice={true}/>
            <Link to='/detail-order'>
                <Button type='primary'>Add new</Button>
            </Link>
        </div>
    )
}


export default OrdersFilter
