//libs
import React from 'react'
import { Form, Input, Select } from 'antd';
//others
import './style.scss'
import { layoutForm } from '@/constants/layout'

const { Option } = Select;
const { TextArea } = Input

interface Props {
    record?: any,
    handleChangeValue: Function
}

const PaymentDetails:React.FC<Props>  = (props) => {
    const {handleChangeValue} = props
    const [form] = Form.useForm();
    const handleOnChange = ()=>{
        handleChangeValue({paymentDetail: form.getFieldsValue()})
    }
    return (
        <Form form={form} {...layoutForm} onChange={handleOnChange}>
            <Form.Item label='Payment Method' name='paymentMethod' initialValue='1'>
                <Select onSelect={handleOnChange} >
                    <Option value='1'>
                        buy at the store
                    </Option>
                    <Option value='2'>
                        remote purchase
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item label='Province/City' name='provinceCity'>
                <Select onSelect={handleOnChange}>
                    <Option value='1'>
                        HCM
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item label='District' name='district'>
                <Select onSelect={handleOnChange}>
                    <Option value='1'>
                        Q9
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item label='Village' name='village'>
                <Select onSelect={handleOnChange}>
                    <Option value='1'>
                        TNP B
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item label='Address' name='address'>
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item label='Delivery Option' name='deliveryOption'>
                <Select onSelect={handleOnChange}>
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
