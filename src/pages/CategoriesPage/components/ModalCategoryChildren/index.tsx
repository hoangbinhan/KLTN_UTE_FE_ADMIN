//libs
import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';

//others
import './style.scss';

type Props = {
    name: String;
    record: any
};

const ModalCategoryChildren: React.FC<Props> = (props) => {
    const { name, record } = props;
    console.log('record', record)
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const showModal = () => {
        setVisible(true);
    };

    const handleOk = (values: any) => {
        setVisible(false);
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
                onOk={() => {
                    form
                        .validateFields()
                        .then((values) => {
                            form.resetFields();
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
                        name='categoryChildren'
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
                </Form>
            </Modal>
        </div>
    );
};

export default ModalCategoryChildren;
