//libs
import React from 'react';
import { Form, Input, Button, Switch } from 'antd';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//others
import './style.scss';

const ProductGeneral = () => {
  const [form] = Form.useForm();
  const createProduct = (value: any) => {
    console.log('value :>> ', value);
  };

  return (
    <Form form={form} onFinish={createProduct}>
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
          onInit={(editor: any) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event: any, editor: any) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event: any, editor: any) => {
            console.log('Focus.', editor);
          }}
          height={300}
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

      <Button type='primary' htmlType='submit'>
        Save
      </Button>
    </Form>
  );
};

export default ProductGeneral;
