//libs
import React from 'react'
import { Form, Input } from 'antd';

const { TextArea } = Input;

const CustomerDetail = () => {
    const [form] = Form.useForm();

    return (
        <Form form={form}>
            <Form.Item label='Number Phone' name='numberPhone'>
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
