//libs
import React, {useContext, useState} from 'react'
import { Form, Input, Select } from 'antd';
//others
import './style.scss'
import { layoutForm } from '@/constants/layout'
//context
import {DetailOrderContext} from '@/context/DetailOrderContext'
//json address
const tree = require('@/addressVN/tree')

const { Option } = Select;
const { TextArea } = Input

interface Props {
    record?: any,
}

const PaymentDetails:React.FC<Props>  = (props) => {
    const { orderChange} = useContext(DetailOrderContext)
    const [form] = Form.useForm();
    const [district, setDistrict] = useState([])
    const [ward, setWard] = useState([])

    const handleOnChange = async ()=>{
        let value = await form.getFieldsValue()
        let temp = {...value}
        if(value.provinceCity){
            temp.provinceCity = tree[parseInt(value.provinceCity)].name
        }
        if(value.district){
            temp.district = tree[parseInt(value.provinceCity)][`quan-huyen`][value.district].name
        }
        if(value.village){
            temp.village = tree[parseInt(value.provinceCity)][`quan-huyen`][value.district][`xa-phuong`][value.village].name
        }        
        if(orderChange){
            orderChange({paymentDetail:temp})
        }
    }    
    
    const handleProvinceChange = (value:string) => {
        setDistrict(tree[parseInt(value)][`quan-huyen`])
    }
    const handleDistrictChange = (value:string)=>{
        setWard(district[parseInt(value)][`xa-phuong`])
    }
        
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
                <Select onSelect={handleOnChange} onChange={handleProvinceChange}>
                    {Object.values(tree).map((item:any)=><Option key={item.code} value={item.code}>{item.name}</Option>)}
                </Select>
            </Form.Item>
            <Form.Item label='District' name='district'>
                <Select onSelect={handleOnChange} onChange={handleDistrictChange}>
                {Object.values(district).map((item:any)=><Option key={item.code} value={item.code}>{item.name}</Option>)}
                </Select>
            </Form.Item>
            <Form.Item label='Village' name='village'>
                <Select onSelect={handleOnChange}>
                {Object.values(ward).map((item:any)=><Option key={item.code} value={item.code}>{item.name}</Option>)}
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
