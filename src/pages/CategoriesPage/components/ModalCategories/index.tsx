//libs
import React, { useState } from 'react';
import { Modal, Button, Form, Input, Upload, message, Switch } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
//utils
//others
import './style.scss';

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
  console.log('record :>> ', record);
  const [form] = Form.useForm();
  const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values: any) => {
    let payload = {...values}
    if(payload.status === true){
      payload = {...payload, status: 'ACTIVE'}
    }else{
      payload = {...payload, status: 'DISABLE'}
    }
    console.log(payload);
    
    setVisible(false);
  };

  const handleCancel = (e: any) => {
    setVisible(false);
  };

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setUploadImage({
        ...uploadImage,
        loading: true,
      });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: any) =>
        setUploadImage({
          ...uploadImage,
          imageUrl,
          loading: true,
        })
      );
    }
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
            name='CategoryName'
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
            name='icon'
            label='Icon'
            rules={[
              {
                required: true,
                message: 'Please add icon',
              },
            ]}
          >
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {uploadImage.imageUrl ? (
                <img
                  src={uploadImage.imageUrl}
                  alt='avatar'
                  style={{ width: '100%' }}
                />
              ) : (
                <div>
                  {uploadImage.loading ? <LoadingOutlined /> : <PlusOutlined />}
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          <Form.Item
            label='Status'
            name='status'
            valuePropName="checked"
          >
            <Switch defaultChecked={record?.status === 'ACTIVE' ? true : false}/>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCategories;
