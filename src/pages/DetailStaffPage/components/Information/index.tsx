//libs
import React from 'react'
import { Avatar, Form, Input, Button, Switch } from 'antd';
import { UserOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';
//others
import './style.scss'

const {TextArea} = Input

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

const Information = () => {
    const [form] = Form.useForm();
    const onFinish = (values:any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className='information-wrapper'>
            <Avatar icon={<UserOutlined/>} size={128} style={{marginBottom:'1rem'}}/>
            <Form form={form} onFinish={onFinish} {...formItemLayout}>
                <Form.Item name='status' label='Status'>
                    <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                    />
                </Form.Item>
                <Form.Item
                    name="employeeCode"
                    label="Employee Code"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Employee Code!',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="userName"
                    label="User Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your User Name!',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your First Name!',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Last Name!',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phoneNumber"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Phone Number!',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="Address"
                >
                    <TextArea rows={4}/>
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your Email!',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}


export default Information
