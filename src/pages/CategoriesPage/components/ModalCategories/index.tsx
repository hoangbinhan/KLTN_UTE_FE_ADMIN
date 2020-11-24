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

const ModalCategories: React.FC<Props> = (props) => {
  const { name, record } = props
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);
  useEffect(() => {
    if(record){
      form.setFieldsValue({
        categoryName: record?.categoryName,
        sortOrder: record?.sortOrder,
        link: record?.link,
        status: record?.status === 'ACTIVE' ? true : false,
      })
    }
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
    let payload = {}
    if (values.status === true) {
      payload = { ...values, status: 'ACTIVE' }
    } else {
      payload = { ...values, status: 'DISABLE' }
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
            message.success('Add new category success')
          },
          cbError: ()=>{
            message.error('ERROR')
            setConfirmLoading(false)
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
        forceRender
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
            name='categoryName'
            label='Category Name'
            rules={[
              {
                required: true,
                message: 'Please input the Category Name',
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
                message: 'Please input the Sort Order',
              },
            ]}
          >
            <Input type='number' />
          </Form.Item>
          <Form.Item
            name='link'
            label='Url'
            rules={[
              {
                required: true,
                message: 'Please input the link',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" listType="picture" action='https://www.mocky.io/v2/5cc8019d300000980a055e76' >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label='Status'
            name='status'
            valuePropName='checked'
          >
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCategories;
