//libs
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form, Input, Switch, message } from 'antd';
//actions
import { addChildrenCategory } from '@/actions/Categories/AddChildrenCategory'
//others
import './style.scss';

type Props = {
    name: String;
    categoryId: String
};

const ModalCategoryChildren: React.FC<Props> = (props) => {
    const { name, categoryId } = props;
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const showModal = () => {
        setVisible(true);
    };
    const handleOk = (values: any) => {
        let payload = { ...values, categoryId: categoryId }
        if (payload.status === true) {
            payload = { ...payload, status: 'ACTIVE' }
        } else {
            payload = { ...payload, status: 'DISABLE' }
        }
        dispatch(
            addChildrenCategory({
                data: payload,
                cbSuccess: () => {
                    form.resetFields();
                    setVisible(false);
                    setConfirmLoading(false)
                    message.success('Add new category success')
                },
                cbError: ()=>{
                    setConfirmLoading(false)
                }
            })
        )
    };

    const handleCancel = (e: any) => {
        setVisible(false);
    };

    return (
        <div className='button-add-category-children-wrapper'>
            <Button type='primary' onClick={showModal}>
                {name}
            </Button>
            <Modal
                centered
                visible={visible}
                title='Create a new collection'
                okText='Submit'
                cancelText='Cancel'
                onCancel={handleCancel}
                confirmLoading={confirmLoading}
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
                    <Form.Item
                        name='childrenCategoryName'
                        label='Name'
                        rules={[
                            {
                                required: true,
                                message: 'Please input the Name',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='sortOrder'
                        label='Sort Order'
                        rules={[
                            {
                                required: true,
                                message: 'Please add Sort Order',
                            },
                        ]}
                    >
                        <Input type='number' />
                    </Form.Item>
                    <Form.Item
                        name='link'
                        label='Link'
                        rules={[
                            {
                                required: true,
                                message: 'Please add link',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Status'
                        name='status'
                        valuePropName="checked"
                    >
                        <Switch />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ModalCategoryChildren;
