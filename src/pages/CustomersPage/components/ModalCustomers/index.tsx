//libs
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form, Input, message } from 'antd';
//utils
//actions
import { addNewCustomer } from '@/actions/Customers/AddNewCustomer'
import { updateCustomer } from '@/actions/Customers/UpdateCustomer'
//others
import './style.scss';
//hooks

type Props = {
  name: String;
  record?: any;
};

const { TextArea } = Input

const ModalCustomers: React.FC<Props> = (props) => {
  const { name, record } = props
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);
  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        phoneNumber: record?.phoneNumber,
        firstName: record?.firstName,
        lastName: record?.lastName,
        email: record?.email,
        address: record?.address
      })
    }
  }, [form, record])
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values: any) => {
    let payload = { ...values }
    setConfirmLoading(true)
    if (!record) {
      dispatch(
        addNewCustomer({
          data: payload,
          cbSuccess: () => {
            form.resetFields();
            setVisible(false);
            setConfirmLoading(false)
            message.success('Add customer success')
          },
          cbError: ()=>{
            setConfirmLoading(false)
          }
        })
      )
    }
    else {
      payload = { ...record, ...values }
      dispatch(
        updateCustomer({
          data: payload,
          cbSuccess: () => {
            form.resetFields();
            setVisible(false);
            setConfirmLoading(false)
            message.success('update customer success')
          },
          cbError: ()=>{
            setConfirmLoading(false)
          }
        })
      )
    }
  };

  const handleCancel = (e: any) => {
    setVisible(false);
  };

  return (
    <>
      <Button type='primary' onClick={showModal} style={{ marginRight: 15 }}>
        {name}
      </Button>
      <Modal
        centered
        visible={visible}
        title='Create a new Customer'
        okText='Submit'
        cancelText='Cancel'
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
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
          <Form.Item
            name='phoneNumber'
            label='Phone Number'
            rules={[
              {
                required: true,
                message: 'Please input the Phone Number',
              }
            ]}

          >
            <Input />
          </Form.Item>
          <Form.Item
            name='firstName'
            label='First Name'
            rules={[
              {
                required: true,
                message: 'Please input the First Name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='lastName'
            label='Last Name'
            rules={[
              {
                required: true,
                message: 'Please input the Last Name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='email'
            label='Email'
            rules={[
              {
                required: true,
                message: 'Please input the Email',
              },
              { type: 'email' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='address'
            label='Address'
            rules={[
              {
                required: true,
                message: 'Please input the Address',
              }
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCustomers;
