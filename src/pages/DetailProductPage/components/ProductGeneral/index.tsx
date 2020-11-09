//libs
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input, Switch, Select } from 'antd';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//component
import ProductImages from '../ProductImages';
//actions
import { fetchDataCategories } from '@/actions/Categories/FetchDataCategories';
//others
import './style.scss';
//hooks
import { useTypedSelector } from '@/hooks';

const { Option } = Select;


const ProductGeneral = () => {
  const dispatch = useDispatch()
  const { listCategories } = useTypedSelector(
    (state) => state.Categories.FetchDataCategories
  )
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

  useEffect(() => {
    dispatch(fetchDataCategories())
  }, [dispatch])

  const listOptionCategory = listCategories?.map((item: any) => <Option value={item._id} key={item._id}>{item.categoryName}</Option>)
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
      <Form.Item name='category' label='Category'>
        <Select>{listOptionCategory}</Select>
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
