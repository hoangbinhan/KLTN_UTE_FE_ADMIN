//libs
import React from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const DetailOrderTab = () => {
    return (
        <Tabs defaultActiveKey="1" >
            <TabPane tab="1. Products" key="1">
                1. Products
            </TabPane>
            <TabPane tab="2. Customer Details" key="2">
                2. Customer Details
            </TabPane>
            <TabPane tab="3. Payment Details" key="3">
                3. Payment Details
            </TabPane>
            <TabPane tab="4. Shipping Details" key="4">
                4. Shipping Details
            </TabPane>
            <TabPane tab="5. Totals" key="5">
                5. Totals
            </TabPane>
        </Tabs>
    )
}


export default DetailOrderTab
