//libs
import React, { useContext, useState } from 'react'
import { Form, Input, Select } from 'antd';
//others
import './style.scss'
import { layoutForm } from '@/constants/layout'
//context
import { DetailOrderContext } from '@/context/DetailOrderContext'
//json address
const tree = require('@/addressVN/tree')

const { Option } = Select;
const { TextArea } = Input

interface Props {
    record?: any,
}

const PaymentDetails: React.FC<Props> = () => {
    const { orderChange } = useContext(DetailOrderContext)
    const [form] = Form.useForm();
    const [district, setDistrict] = useState([])
    const [ward, setWard] = useState([])

    const handleOnChange = async () => {
        let value = await form.getFieldsValue()
        let temp = { ...value }
        if (value.provinceCity) {
            temp.provinceCity = tree[parseInt(value.provinceCity)].name
        }
        if (value.district && value.provinceCity) {
            temp.district = tree[parseInt(value.provinceCity)][`quan-huyen`][value.district].name
        }
        if (value.ward && value.district) {
            temp.ward = tree[parseInt(value.provinceCity)][`quan-huyen`][value.district][`xa-phuong`][value.ward].name
        }
        if (orderChange) {
            orderChange({ paymentDetail: temp })
        }
    }

    const handleProvinceChange = (value: string) => {
        if (tree[parseInt(value)][`quan-huyen`]) {
            setDistrict(tree[parseInt(value)][`quan-huyen`])
        }
    }
    const handleDistrictChange = (value: string) => {
        if (district[parseInt(value)]) {
            setWard(district[parseInt(value)][`xa-phuong`])
        }
    }

    return (
        <Form name='payment' form={form} {...layoutForm} onChange={handleOnChange}>
            <Form.Item label='Payment Method' name='paymentMethod'>
                <Select onSelect={handleOnChange} placeholder='select payment method...'>
                    <Option value='1'>
                        buy at the store
                    </Option>
                    <Option value='2'>
                        remote purchase
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item label='Province/City' name='provinceCity'>
                <Select onSelect={handleOnChange} onChange={handleProvinceChange} placeholder='select province/city...'>
                    {Object.values(tree).map((item: any) => <Option key={item.code} value={item.code}>{item.name}</Option>)}
                </Select>
            </Form.Item>
            <Form.Item label='District' name='district'>
                <Select onSelect={handleOnChange} onChange={handleDistrictChange} placeholder='select district...'>
                    {Object.values(district).map((item: any) => <Option key={item.code} value={item.code}>{item.name}</Option>)}
                </Select>
            </Form.Item>
            <Form.Item label='Ward' name='ward'>
                <Select onSelect={handleOnChange} placeholder='select ward...'>
                    {Object.values(ward).map((item: any) => <Option key={item.code} value={item.code}>{item.name}</Option>)}
                </Select>
            </Form.Item>
            <Form.Item label='Address' name='address'>
                <TextArea rows={4} placeholder='input the address...' />
            </Form.Item>
            <Form.Item label='Delivery Option' name='deliveryOption'>
                <Select onSelect={handleOnChange} placeholder='select delivery option...'>
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
