//libs
import React, { useState } from 'react'
import { Button, Select, Form, Modal } from 'antd'
//other

const { Option } = Select

interface Props {
    id: String,
    status: String
}

const EditStatus: React.FC<Props> = (props) => {
    const { id, status } = props
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm();

    const showModal = () => {
        setVisible(true)
    };

    const onSubmit = (values: any) => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false)
    };

    return (
        <>
            <Button onClick={showModal} style={{ marginLeft: '1rem' }}>
                Edit Status
            </Button>
            <Modal
                visible={visible}
                title="Create a new collection"
                okText="Submit"
                cancelText="Cancel"
                onCancel={handleCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then(values => {
                            form.resetFields();
                            onSubmit(values);
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
                >
                    <Form.Item
                        name="status"
                        label="Status"
                        initialValue={status}
                    >
                        <Select>
                            <Option value="PENDING">PENDING</Option>
                            <Option value="CONFIRM">CONFIRM</Option>
                            <Option value="SHIPPING">SHIPPING</Option>
                            <Option value="CANCELED">CANCELED</Option>
                            <Option value="REFUNDED">REFUNDED</Option>
                            <Option value="DELIVERED">DELIVERED</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default EditStatus
