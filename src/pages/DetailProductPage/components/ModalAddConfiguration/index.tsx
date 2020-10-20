//libs
import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const { TextArea } = Input;

const ModalAddConfiguration = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  const handleCancel = (e: any) => {
    setVisible(false);
  };
  return (
    <>
      <Button type='primary' onClick={showModal}>
        Add new
      </Button>
      <Modal
        title='Add new configuration'
        visible={visible}
        onCancel={handleCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
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
          initialValues={{ modifier: 'public' }}
        >
          <Form.Item
            name='title'
            label='Title'
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='info'
            label='info'
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalAddConfiguration;
