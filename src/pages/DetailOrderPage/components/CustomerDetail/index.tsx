//libs
import React, {useState} from 'react'
import { Form, Input } from 'antd';

//others
import './style.scss'
import { layoutForm } from '@/constants/layout'

const { TextArea } = Input;

interface Props {
    record?: any,
    handleChangeValue: Function
}

const CustomerDetail:React.FC<Props> = (props) => {
    const {handleChangeValue} = props
    const [form] = Form.useForm();
    const handleOnChange = ()=>{
        handleChangeValue({customerDetail: form.getFieldsValue()})
    }
    return (
        <Form form={form} {...layoutForm} onChange={handleOnChange}>
            <Form.Item label='Number Phone' name='numberPhone'>
                <Input type='number'/>
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
