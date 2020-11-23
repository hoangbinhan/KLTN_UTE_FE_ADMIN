//libs
import React from 'react'
import {Form, Button, Input} from 'antd'
import { LockOutlined } from '@ant-design/icons';
//others
import './style.scss'

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 8 },
      sm: { span: 8 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 8,
        },
        sm: {
            span: 8,
            offset: 8,
        },
    }
}

const ChangePassword = () => {
    const onFinish = (values:any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className='change-password-wrapper'> 
            <Form
                onFinish={onFinish}
                {...formItemLayout}
                >
                <Form.Item
                    name="password"
                    label='Password'
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    label='Confirm Password'
                    rules={[{ required: true, message: 'Please input Confirm Password!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" className="login-form-button">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}


export default ChangePassword
