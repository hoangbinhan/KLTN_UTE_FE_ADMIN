//libs
import React, {useContext} from 'react'
import { Form, Input, Select } from 'antd';
//others
import './style.scss'
import { layoutForm } from '@/constants/layout'
//context
import {DetailOrderContext} from '@/context/DetailOrderContext'
//json address
const city = require('@/addressVN/tinh_tp')
const province = require('@/addressVN/quan_huyen')
const ward = require('@/addressVN/xa_phuong') 

const { Option } = Select;
const { TextArea } = Input

interface Props {
    record?: any,
}

const PaymentDetails:React.FC<Props>  = (props) => {
    const { orderChange} = useContext(DetailOrderContext)
    const [form] = Form.useForm();
    const handleOnChange = async ()=>{
        let value = await form.getFieldsValue()
        console.log('value :>> ', value);
        if(orderChange){
            orderChange({paymentDetail:value})
        }
    }
    
    const CityProvinceOptions = Object.values(city).map((item:any)=><Option key={item.code} value={item.code}>{item.name}</Option>)
    
    return (
        <Form name='payment' form={form} {...layoutForm} onChange={handleOnChange}>
            <Form.Item label='Payment Method' name='paymentMethod'>
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
                    {CityProvinceOptions}
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
