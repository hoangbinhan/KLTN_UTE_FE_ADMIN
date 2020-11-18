//libs
import React, { useContext, useState, useEffect } from 'react'
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
    const [isDisable, setIsDisable] = useState(false)
    const { order, orderChange } = useContext(DetailOrderContext)
    const [form] = Form.useForm();
    const [district, setDistrict] = useState([])
    const [ward, setWard] = useState([])

    const handleOnChange = async () => {
        let value = await form.getFieldsValue()
        let temp = { ...value }
        if (value.provinceCity) {
            temp.provinceCity = tree[value.provinceCity]?.name
        }
        if (value.district && value.provinceCity) {
            let result = tree[parseInt(value.provinceCity)][`quan-huyen`][value.district]
            result ? temp.district = result.name : temp.district = ''
            // temp.district = tree[parseInt(value.provinceCity)][`quan-huyen`][value.district].name
        }
        if (value.ward && value.district) {
            let district = tree[parseInt(value.provinceCity)][`quan-huyen`][value.district]
            if (district) {
                let result = district[`xa-phuong`][value.ward]
                result ? temp.ward = result.name : temp.ward = ''
            }
            // temp.ward = tree[parseInt(value.provinceCity)][`quan-huyen`][value.district][`xa-phuong`][value.ward].name
        }
        if (orderChange) {
            orderChange({ paymentDetail: temp })
        }
    }

    const handleProvinceChange = async (value: any) => {
        await setDistrict([])
        await setWard([])
        form.setFieldsValue({ ...form.getFieldsValue(), district: undefined, ward: undefined })
        if (tree[(value)][`quan-huyen`]) {
            setDistrict(tree[(value)][`quan-huyen`])
        }
    }
    const handleDistrictChange = async (value: any) => {
        await setWard([])
        form.setFieldsValue({ ...form.getFieldsValue(), ward: undefined })
        if (district[value]) {
            setWard(district[(value)][`xa-phuong`])
        }
    }

    useEffect(() => {
        if(!order.paymentDetail){

        }else{
            form.setFieldsValue(order.paymentDetail)
            setIsDisable(true)
        }
    }, [form, order.paymentDetail])

    return (
        <Form name='payment' form={form} {...layoutForm} onChange={handleOnChange}>
            <Form.Item label='Payment Method' name='paymentMethod'>
                <Select onSelect={handleOnChange} placeholder='select payment method...' disabled={isDisable} >
                    <Option value='1'>
                        buy at the store
                    </Option>
                    <Option value='2'>
                        remote purchase
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item label='Delivery Option' name='deliveryOption'>
                <Select onSelect={handleOnChange} placeholder='select delivery option...' disabled={isDisable}>
                    <Option value='1'>
                        Standard Delivery
                    </Option>
                    <Option value='2'>
                        Instant Delivery
                    </Option>
                </Select>
            </Form.Item>
            <Form.Item label='Province/City' name='provinceCity'>
                <Select onSelect={handleOnChange} onChange={handleProvinceChange} placeholder='select province/city...' disabled={isDisable}>
                    {Object.values(tree).map((item: any) => <Option key={item.code} value={item.code}>{item.name}</Option>)}
                </Select>
            </Form.Item>
            <Form.Item label='District' name='district'>
                <Select onSelect={handleOnChange} onChange={handleDistrictChange} placeholder='select district...' disabled={isDisable}>
                    {Object.values(district).map((item: any) => <Option key={item.code} value={item.code}>{item.name}</Option>)}
                </Select>
            </Form.Item>
            <Form.Item label='Ward' name='ward'>
                <Select onSelect={handleOnChange} placeholder='select ward...' disabled={isDisable}>
                    {Object.values(ward).map((item: any) => <Option key={item.code} value={item.code}>{item.name}</Option>)}
                </Select>
            </Form.Item>
            <Form.Item label='Address' name='address'>
                <TextArea rows={4} placeholder='input the address...' disabled={isDisable}/>
            </Form.Item>
        </Form>
    )
}

export default PaymentDetails
