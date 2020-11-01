//libs
import React from 'react'
import { Descriptions, Table, Input, Divider } from 'antd'
//others
import { columnsOrderItems } from '../../DataSrouce/Total'
import './style.scss'

const { TextArea } = Input

const Totals = () => {
    return (
        <div className='total-wrapper'>
            <Descriptions layout='vertical' bordered>
                <Descriptions.Item label="Order Details" className='description-item'>
                    Your Store
                    <br />
                    01/11/2020
                    <br />
                    Cash On Delivery
                    <br />
                    Flat Shipping Rate
                </Descriptions.Item>
                <Descriptions.Item label="Customer Details" className='description-item'>
                    Hoang Binh An
                    <br />
                    default
                    <br />
                    hoangbinhana3@gmail.com
                    <br />
                    0963734721
                </Descriptions.Item>
            </Descriptions>
            <Table columns={columnsOrderItems} dataSource={[]} style={{ margin: '2rem 0' }} />
            <Descriptions layout='vertical' bordered>
                <Descriptions.Item label="Note" className='description-item'>
                    <TextArea rows={8} />
                </Descriptions.Item>
                <Descriptions.Item label="Total" className='description-item'>
                    <div className="row-unit-total">
                        <div className="title">Units Ordered</div>
                        <div className="value">8</div>
                    </div>
                    <Divider />
                    <div className="row-unit-total">
                        <div className="title">Units Ordered</div>
                        <div className="value">8</div>
                    </div>
                    <Divider />
                    <div className="row-unit-total">
                        <div className="title">Units Ordered</div>
                        <div className="value">8</div>
                    </div>
                    <Divider />
                </Descriptions.Item>
            </Descriptions>
        </div>
    )
}


export default Totals
