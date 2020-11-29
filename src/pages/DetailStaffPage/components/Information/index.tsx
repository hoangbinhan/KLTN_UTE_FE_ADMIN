//libs
import React, { useEffect, useState } from 'react'
import { Avatar, Form, Input, Button, Switch, message } from 'antd';
import { UserOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
//actions
import { updateStaff } from '@/actions/Staff/UpdateStaff'
//hooks
import { useRouter, useTypedSelector } from '@/hooks';
//others
import './style.scss'
import CONSTANTS from '@/constants'

const { TextArea } = Input

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
    const router = useRouter()
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const { detailStaff } = useTypedSelector(
        (state) => state.Staff.FetchDetailStaff
    )
    const [confirmLoading, setConfirmLoading] = useState(false);

    useEffect(() => {
        if (detailStaff) {
            form.setFieldsValue(detailStaff)
        }
    }, [detailStaff, form])

    const onFinish = (values: any) => {
        const payload = { ...values, id: detailStaff._id }
        dispatch(updateStaff({
            data: payload,
            cbSuccess: () => {
                form.resetFields();
                setConfirmLoading(false)
                message.success('Update Staff Information success')
                router.push(CONSTANTS.ROUTERS.STAFF)
            },
            cbError: () => {
                setConfirmLoading(false)
                message.error('Update Staff Information Fail')
            }
        }))
    };

    return (
        <div className='information-wrapper'>
            <Avatar icon={<UserOutlined />} size={128} style={{ marginBottom: '1rem' }} />
            <Form form={form} onFinish={onFinish} {...formItemLayout}>
                <Form.Item name='status' label='Status' valuePropName="checked">
                    <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        defaultChecked
                    />
                </Form.Item>
                <Form.Item
                    name="username"
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
                    <TextArea rows={4} />
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
                    <Button type="primary" htmlType="submit" loading={confirmLoading}>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}


export default Information
