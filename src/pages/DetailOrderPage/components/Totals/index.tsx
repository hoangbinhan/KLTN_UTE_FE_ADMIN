//libs
import React from 'react'
import { Descriptions, Table, Input, Divider } from 'antd'
//others
import { columnsOrderItems } from '../../DataSrouce/Total'
import './style.scss'

const { TextArea } = Input

const Totals = () => {


    return (
        <>
            <Descriptions layout='vertical' bordered>
                <Descriptions.Item label="Order Details">
                    Your Store
                    <br />
                    01/11/2020
                    <br />
                    Cash On Delivery
                    <br />
                    Flat Shipping Rate
                </Descriptions.Item>
                <Descriptions.Item label="Customer Details">
                    Hoang Binh An
                    <br />
                    default
                    <br />
                    hoangbinhana3@gmail.com
                    <br />
                    0963734721
                </Descriptions.Item>
            </Descriptions>
            <Table columns={columnsOrderItems} dataSource={[]} />
            <Descriptions layout='vertical' bordered>
                <Descriptions.Item label="Note">
                    <TextArea rows={4} />
                </Descriptions.Item>
                <Descriptions.Item label="Total">
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
        </>
    )
}


export default Totals
