//libs
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form, Input, Upload, message, Switch } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
//utils
//actions
import { addNewCategory } from '@/actions/Categories/AddNewCategory'
import { updateCategory } from '@/actions/Categories/UpdateCategory'
//others
import './style.scss';
//hooks

type Props = {
  name: String;
  record?: any;
};

const ModalCustomers: React.FC<Props> = (props) => {
  const { name, record } = props
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);
  useEffect(() => {
    form.setFieldsValue({
      categoryName: record?.categoryName,
      sortOrder: record?.sortOrder,
      link: record?.link,
      status: record?.status === 'ACTIVE' ? true : false
    })
  }, [form, record])
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values: any) => {
    let payload = { ...values }
    if (payload.status === true) {
      payload = { ...payload, status: 'ACTIVE' }
    } else {
      payload = { ...payload, status: 'DISABLE' }
    }
    setConfirmLoading(true)
    if (!record) {
      dispatch(
        addNewCategory({
          data: payload,
          cbSuccess: () => {
            form.resetFields();
            setVisible(false);
            setConfirmLoading(false)
            message.success('Add new children category success')
          }
        })
      )
    }
    else {
      payload = { ...record, ...payload }
      dispatch(
        updateCategory({
          data: payload,
          cbSuccess: () => {
            form.resetFields();
            setVisible(false);
            setConfirmLoading(false)
            message.success('update category success')
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
        title='Create a new collection'
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
            <Input type='number' />
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
        </Form>
      </Modal>
    </>
  );
};

export default ModalCustomers;
