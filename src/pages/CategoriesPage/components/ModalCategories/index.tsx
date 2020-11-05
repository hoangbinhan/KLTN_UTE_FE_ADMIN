//libs
import React, { useState } from 'react';
import { Modal, Button, Form, Input, Upload, message, Switch } from 'antd';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
//utils
//actions
import { addNewCategory } from '@/actions/Categories/AddNewCategory'
//others
import './style.scss';
import { useDispatch } from 'react-redux';

type Props = {
  name: String;
  record?: any;
};

const ModalCategories: React.FC<Props> = (props) => {
  const { name, record } = props;
  const [visible, setVisible] = useState(false);
  const [uploadImage, setUploadImage] = useState({
    imageUrl: '',
    loading: false,
  });
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

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
    dispatch(
      addNewCategory({
        data: payload,
        cbSuccess: () => {
          console.log('djt con me');
          setVisible(false);
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
            name='categoryName'
            label='Category Name'
            rules={[
              {
                required: true,
                message: 'Please input the Category Name',
              },
            ]}
            initialValue={record ? record.categoryName : ''}
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
            initialValue={record ? record.sortOrder : ''}
          >
            <Input type='number' />
          </Form.Item>

          <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label='Status'
            name='status'
            valuePropName="checked"
          >
            <Switch defaultChecked={record?.status === 'ACTIVE' ? true : false} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCategories;
