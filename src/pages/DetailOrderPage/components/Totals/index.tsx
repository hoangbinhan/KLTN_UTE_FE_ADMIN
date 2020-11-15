//libs
import React, { useContext, useState } from 'react'
import { Descriptions, Table, Input, Divider, Button } from 'antd'
import moment from 'moment'
//others
import { columnsOrderItems } from '../../DataSrouce/Total'
import './style.scss'
//context
import { DetailOrderContext } from '@/context/DetailOrderContext'

const { TextArea } = Input

const Totals = () => {
    const [note, setNote] = useState('')
    const { order, orderChange, submitOrder } = useContext(DetailOrderContext)
    const unitOrder = order.productsInvoice?.reduce((a: any, b: any) => a + parseInt(b.quantity), 0)
    const subTotal = order.productsInvoice?.reduce((a: any, b: any) => a + (parseInt(b.quantity) * parseFloat(b.price)), 0)
    const shippingFee = 10
    const total = subTotal + shippingFee
    const onsubmit = async () => {
        if (orderChange && submitOrder) {
            let totalDetail = {
                note: note,
                unitOrder: unitOrder,
                subTotal: subTotal,
                shippingFee: shippingFee,
                total: total
            }
            await orderChange({
                totalDetail
            })
            let temp = { ...order, totalDetail }
            submitOrder(temp)
        }
    }
    return (
        <div className='total-wrapper'>
            <Descriptions layout='vertical' bordered>
                <Descriptions.Item label="Order Details" className='description-item'>
                    <h2>DHA Store</h2>
                    <strong>Time create: </strong>{moment().format('MMMM Do YYYY, h:mm a')}
                    <br />
                    <strong>Payment method: </strong>{order.paymentDetail?.paymentMethod}
                    <br />
                    <strong>Delivery Option: </strong>{order.paymentDetail?.deliveryOption}
                    <br />
                    <strong>Shipping Address: </strong>{order.paymentDetail?.address}, {order.paymentDetail?.ward}, {order.paymentDetail?.district}, {order.paymentDetail?.provinceCity}
                </Descriptions.Item>
                <Descriptions.Item label="Customer Details" className='description-item'>
                    <strong>Name: </strong> {order.customerDetail?.firstName} {order.customerDetail?.lastName}
                    <br />
                    <strong>Phone Number: </strong> {order.customerDetail?.phoneNumber}
                    <br />
                    <strong>Email: </strong> {order.customerDetail?.email}
                    <br />
                    <strong>Address: </strong> {order.customerDetail?.address}
                </Descriptions.Item>
            </Descriptions>
            <Table columns={columnsOrderItems} dataSource={order?.productsInvoice} style={{ margin: '2rem 0' }} />
            <Descriptions layout='vertical' bordered>
                <Descriptions.Item label="Note" className='description-item'>
                    <TextArea rows={8} onChange={(e) => setNote(e.target.value)} />
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
            <div className="button-submit">
                <Button style={{ marginRight: '1rem' }}>Reset</Button>
                <Button type='primary' onClick={onsubmit}>Submit</Button>
            </div>
        </div>
    )
}


export default Totals
