//libs
import React from 'react'
import { Tabs } from 'antd';
//components
import ProductsOrder from '../ProductsOrder'
import CustomerDetail from '../CustomerDetail'
import PaymentDetails from '../PaymentDetails'
import Totals from '../Totals'

const { TabPane } = Tabs;

const DetailOrderTab = () => {
    return (
        <Tabs defaultActiveKey="1" >
            <TabPane tab="1. Products" key="1">
                <ProductsOrder />
            </TabPane>
            <TabPane tab="2. Customer Details" key="2">
                <CustomerDetail />
            </TabPane>
            <TabPane tab="3. Payment Details" key="3">
                <PaymentDetails />
            </TabPane>
            <TabPane tab="4. Totals" key="4">
                <Totals />
            </TabPane>
        </Tabs>
    )
}


export default DetailOrderTab
