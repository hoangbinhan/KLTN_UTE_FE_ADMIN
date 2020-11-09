//libs
import React, { useState } from 'react';
import { Button, Form, Input, Switch } from 'antd';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//component
import ProductImages from '../ProductImages';
//others
import './style.scss';

const ProductGeneral = () => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 18, span: 16 },
  };
  const [form] = Form.useForm();
  const [images, setImages] = useState([])
  const [description, setDescription] = useState('')
  const handleChangeImages = (values: []) => {
    setImages(values)
  }
  const createProduct = (value: any) => {
    const result = { ...value, picture: images, description: description }
    console.log('result :>> ', result);
  };

  return (
    <Form form={form} onFinish={createProduct} {...layout}>
      <Form.Item
        name='productName'
        label='Product Name'
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='description'
        label='Description'
        rules={[{ required: true }]}
      >
        <CKEditor
          editor={ClassicEditor}
          data=''
          onChange={(event: any, editor: any) => {
            setDescription(editor.getData());
          }}
          className='ck-editor__editable'
        />
      </Form.Item>
      <Form.Item name='quantity' label='Quantity' rules={[{ required: true }]}>
        <Input type='number' />
      </Form.Item>
      <Form.Item name='price' label='Price' rules={[{ required: true }]}>
        <Input type='number' />
      </Form.Item>
      <Form.Item
        name='discountPrice'
        label='Discount Price'
        rules={[{ required: true }, { min: 1 }]}
      >
        <Input type='number' />
      </Form.Item>
      <Form.Item
        name='guarantee'
        label='Guarantee'
        rules={[{ required: true }]}
      >
        <Input type='number' />
      </Form.Item>
      <Form.Item name='status' label='Status' initialValue={true}>
        <Switch defaultChecked />
      </Form.Item>
      <Form.Item name='picture' label='Picture'>
        <ProductImages handleChangeImages={handleChangeImages} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default ProductGeneral;
