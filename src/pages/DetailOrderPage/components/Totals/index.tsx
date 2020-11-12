//libs
import React, {useContext} from 'react'
import { Descriptions, Table, Input, Divider } from 'antd'
import moment from 'moment'
//others
import { columnsOrderItems } from '../../DataSrouce/Total'
import './style.scss'
//context
import {DetailOrderContext} from '@/context/DetailOrderContext'

const { TextArea } = Input

const Totals = () => {
    const { order} = useContext(DetailOrderContext)
    const unitOrder = order.productsInvoice?.reduce((a:any, b:any)=>a+parseInt(b.quantity) ,0)
    const subTotal = order.productsInvoice?.reduce((a:any, b:any)=>a + (parseInt(b.quantity)*parseFloat(b.price)) ,0)
    const shippingFee = 10
    const total = subTotal + shippingFee
    console.log('order :>> ', order);
    return (
        <div className='total-wrapper'>
            <Descriptions layout='vertical' bordered>
                <Descriptions.Item label="Order Details" className='description-item'>
                    DHA Store
                    <br />
                    {moment().format('MMMM Do YYYY, h:mm a')}
                    <br />
                    {order.paymentDetail?.paymentMethod}
                    <br />
                    {order.paymentDetail?.deliveryOption}
                </Descriptions.Item>
                <Descriptions.Item label="Customer Details" className='description-item'>
                    {`${order.customerDetail?.firstName} ${order.customerDetail?.lastName}`}
                    <br />
                    {order.customerDetail?.phoneNumber}
                    <br />
                    {order.customerDetail?.email}
                    <br />
                    {order.customerDetail?.address}
                </Descriptions.Item>
            </Descriptions>
            <Table columns={columnsOrderItems} dataSource={order?.productsInvoice} style={{ margin: '2rem 0' }} />
            <Descriptions layout='vertical' bordered>
                <Descriptions.Item label="Note" className='description-item'>
                    <TextArea rows={8} />
                </Descriptions.Item>
                <Descriptions.Item label="Total" className='description-item'>
                    <div className="row-unit-total">
                        <div className="title">Units Ordered</div>
                        <div className="value">{unitOrder}</div>
                    </div>
                    <Divider />
                    <div className="row-unit-total">
                        <div className="title">Subtotal</div>
                        <div className="value">{subTotal}</div>
                    </div>
                    <Divider />
                    <div className="row-unit-total">
                        <div className="title">Shipping & Handling</div>
                        <div className="value">{shippingFee}</div>
                    </div>
                    <Divider />
                    <div className="row-unit-total">
                        <div className="title">Total</div>
                        <div className="value">{total || 0}</div>
                    </div>
                </Descriptions.Item>
            </Descriptions>
        </div>
    )
}


export default Totals
