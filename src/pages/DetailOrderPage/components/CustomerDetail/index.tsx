//libs
import React, {useContext} from 'react'
import { Form, Input } from 'antd';
//others
import './style.scss'
import { layoutForm } from '@/constants/layout'
//context
import {DetailOrderContext} from '@/context/DetailOrderContext'

const { TextArea } = Input;

interface Props {
    record?: any,
}

const CustomerDetail: React.FC<Props> = (props) => {
    const { orderChange} = useContext(DetailOrderContext)
    const [form] = Form.useForm();
    const handleOnChange = async () => {
        let value = await form.getFieldsValue()
        if(orderChange){
            orderChange({customerDetail:value})
        }
    }
    return (
        //TODO: set context here
        <Form form={form} {...layoutForm} onChange={handleOnChange} >
            <Form.Item label='Phone Number' name='phoneNumber'>
                <Input />
            </Form.Item>
            <Form.Item label='First Name' name='firstName'>
                <Input />
            </Form.Item>
            <Form.Item label='Last Name' name='lastName'>
                <Input />
            </Form.Item>
            <Form.Item label='Email' name='email'>
                <Input />
            </Form.Item>
            <Form.Item label='Address' name='address'>
                <TextArea rows={4} />
            </Form.Item>
        </Form>
    )
}


export default CustomerDetail
