//libs
import React, {useEffect, useContext} from 'react'
import { useDispatch } from 'react-redux';
import { Tabs } from 'antd';
//components
import ProductsOrder from '../ProductsOrder'
import CustomerDetail from '../CustomerDetail'
import PaymentDetails from '../PaymentDetails'
import Totals from '../Totals'
//hooks
import { useRouter, useTypedSelector } from '@/hooks';
//context
import {DetailOrderContext} from '@/context/DetailOrderContext'
//actions
import {fetchDetailOrder} from '@/actions/Order/FetchDetailOrder'
//others
import './style.scss'

const { TabPane } = Tabs;

const DetailOrderTab = () => {
    const { orderChange } = useContext(DetailOrderContext)
    const dispatch = useDispatch()
    const router = useRouter()
    const paramOrder = router.query.id
    const {detailOrder} = useTypedSelector(
        (state)=>state.Order.FetchDetailOrder
    )
    
    useEffect(() => {
        if(paramOrder){
            dispatch(fetchDetailOrder({params:{id: paramOrder}}))
        }else{
            if(orderChange){
                orderChange({})
            }
        }
        // eslint-disable-next-line
    }, [paramOrder, dispatch])
    console.log('render');
    
    useEffect(()=>{
        if(detailOrder && orderChange){
            orderChange(detailOrder) 
        }
        // eslint-disable-next-line
    },[detailOrder]) 
    return (
            <div className="detail-order-tab-wrapper">
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="1. Products" key="1">
                        <ProductsOrder />
                    </TabPane>
                    <TabPane tab="2. Customer Details" key="2">
                        <CustomerDetail/>
                    </TabPane>
                    <TabPane tab="3. Payment Details" key="3">
                        <PaymentDetails />
                    </TabPane>
                    <TabPane tab="4. Totals" key="4">
                        <Totals />
                    </TabPane>
                </Tabs>
            </div>
    )
}


export default DetailOrderTab
