//libs
import React, { useState } from 'react'
import { Tabs } from 'antd';
//components
import ProductsOrder from '../ProductsOrder'
import CustomerDetail from '../CustomerDetail'
import PaymentDetails from '../PaymentDetails'
import Totals from '../Totals'
//others
import './style.scss'

const { TabPane } = Tabs;

const DetailOrderTab = () => {
    const [result, setResult] = useState({})
    const handleChangeValue = (value: any)=>{
        let key = Object.keys(value)[0]
        setResult({...result, [key]:value[key]})
    }
    return (
        <div className="detail-order-tab-wrapper">
            <Tabs defaultActiveKey="1" >
                <TabPane tab="1. Products" key="1">
                    <ProductsOrder />
                </TabPane>
                <TabPane tab="2. Customer Details" key="2">
                    <CustomerDetail handleChangeValue={handleChangeValue}/>
                </TabPane>
                <TabPane tab="3. Payment Details" key="3">
                    <PaymentDetails handleChangeValue={handleChangeValue}/>
                </TabPane>
                <TabPane tab="4. Totals" key="4">
                    <Totals />
                </TabPane>
            </Tabs>
        </div>
    )
}


export default DetailOrderTab
