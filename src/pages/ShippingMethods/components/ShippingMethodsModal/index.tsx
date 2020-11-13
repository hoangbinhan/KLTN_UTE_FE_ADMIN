//libs
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form, Input, message, Switch } from 'antd';
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

const ShippingMethodsModal: React.FC<Props> = (props) => {
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
            name='shippingMethod'
            label='Shipping Method'
            rules={[
              {
                required: true,
                message: 'Please input the Shipping Method',
              },
            ]}

          >
            <Input placeholder='input the shipping method...'/>
          </Form.Item>
          <Form.Item
            name='shippingFee'
            label='Shipping Fee'
            rules={[
              {
                required: true,
                message: 'Please input the Shipping Fee',
              },
            ]}
          >
            <Input type='number' placeholder='input the shipping fee...'/>
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
    </>
  );
};

export default ShippingMethodsModal;
