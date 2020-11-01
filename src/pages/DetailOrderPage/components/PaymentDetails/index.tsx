//libs
import React, { useState } from 'react'
import { Form, Input, Select } from 'antd';

const { Option } = Select;
const { TextArea } = Input

const PaymentDetails = () => {
    const [form] = Form.useForm();
    const [paymentMethod, setPaymentMethod] = useState('1')
    const selectMethod = (value: string) => {
        setPaymentMethod(value)
    }
    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Form form={form} onFinish={onFinish}>
            <Form.Item label='Payment Method' name='paymentMethod' initialValue={paymentMethod}>
                <Select onChange={selectMethod} >
                    <Option value='1'>
                        buy at the store
                    </Option>
                    <Option value='2'>
                        remote purchase
                    </Option>
                </Select>
            </Form.Item>

            <Form.Item label='Province/City' name='provinceCity'>
                <Select  >
                    <Option value='1'>
                        HCM
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item label='District' name='district'>
                <Select >
                    <Option value='1'>
                        Q9
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item label='Village' name='village'>
                <Select >
                    <Option value='1'>
                        TNP B
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item label='Address' name='address'>
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item label='Delivery Option' name='deliveryOption'>
                <Select >
                    <Option value='1'>
                        Standard Delivery
                    </Option>
                    <Option value='2'>
                        Instant Delivery
                    </Option>
                </Select>
            </Form.Item>
        </Form>
    )
}

export default PaymentDetails
