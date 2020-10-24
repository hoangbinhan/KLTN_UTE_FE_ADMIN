//libs
import React, { useState } from 'react'
import { Button, Modal, Form, Input, AutoComplete, Rate, DatePicker, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;

interface Props {
    title: string
}

const ReviewModal: React.FC<Props> = (props) => {
    const { title } = props
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);

    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };

    const onCancel = () => {
        setVisible(false)
    }

    const onShow = () => {
        setVisible(true)
    }

    return (
        <>
            <Button type='primary' onClick={onShow}>{title}</Button>
            <Modal
                visible={visible}
                title="Create a new collection"
                okText="Create"
                cancelText="Cancel"
                onCancel={onCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then(values => {
                            form.resetFields();
                            onCreate(values);
                        })
                        .catch(info => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{ modifier: 'public' }}
                >
                    <Form.Item
                        name="product"
                        label="Product"
                        rules={[{ required: true, message: 'Please input the title of collection!' }]}
                    >
                        <AutoComplete />
                    </Form.Item>
                    <Form.Item name="author" label="Author">
                        <Input />
                    </Form.Item>
                    <Form.Item name='description' label='Description'>
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item name='rate' label='Rate'>
                        <Rate />
                    </Form.Item>
                    <Form.Item name='dateAdded' label='Date Added'>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name='status' label='Status' initialValue='true'>
                        <Select style={{ width: 120 }} >
                            <Option value="true">Enable</Option>
                            <Option value="false">Disable</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ReviewModal
