//libs
import React, { useState } from 'react';
import { Modal, Button, Form, Input, Switch, message } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
//utils
//actions
import { addNewStaff } from '@/actions/Staff/AddNewStaff'
//others
import './style.scss';
import { useDispatch } from 'react-redux';
//hooks

const { TextArea } = Input

const ModalAddNew = () => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const dispatch = useDispatch()
    const showModal = () => {
        setVisible(true);
    };

    const handleOk = (values: any) => {
        const payload = { ...values, status: values?.status ? 'ACTIVE' : 'DISABLE' }
        setConfirmLoading(true)
        dispatch(
            addNewStaff({
                data: payload,
                cbSuccess: () => {
                    form.resetFields();
                    setVisible(false);
                    setConfirmLoading(false)
                    message.success('Add customer success')
                },
                cbError: () => {
                    setConfirmLoading(false)
                }
            })
        )
    };

    const handleCancel = (e: any) => {
        setVisible(false);
    };

    return (
        <>
            <Button type='primary' onClick={showModal}>
                Add New
            </Button>
            <Modal
                centered
                visible={visible}
                title='Create a new Staff'
                okText='Submit'
                cancelText='Cancel'
                onCancel={handleCancel}
                confirmLoading={confirmLoading}
                bodyStyle={{ height: 500, overflowX: 'scroll' }}
                // getContainer={false}
                onOk={() => {
                    form
                        .validateFields()
                        .then((values) => {
                            handleOk(values);
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Form
                    form={form}
                    layout='vertical'
                    name='form_in_modal'
                    initialValues={{
                        modifier: 'public',
                    }}
                >
                    <Form.Item name='status' label='Status' valuePropName="checked" initialValue={true}>
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
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            }
                        ]}
                    >
                        <Input type='password' />
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
                </Form>
            </Modal>
        </>
    );
};

export default ModalAddNew;
