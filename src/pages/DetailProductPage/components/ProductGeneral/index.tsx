//libs
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input, Switch, Select, message } from 'antd';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//component
import ProductImages from '../ProductImages';
//actions
import { fetchDataCategories } from '@/actions/Categories/FetchDataCategories';
import { addNewProduct } from '@/actions/Products/AddNewProduct'
import { fetchDetailProduct } from '@/actions/Products/FetchDetailProduct'
import { updateProduct } from '@/actions/Products/UpdateProduct'
import {clearDataState} from '@/actions/Products/ClearState'
//others
import './style.scss';
//hooks
import { useRouter, useTypedSelector } from '@/hooks';

const { Option } = Select;


const ProductGeneral = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { listCategories } = useTypedSelector(
    (state) => state.Categories.FetchDataCategories
  )
  const { detailProduct } = useTypedSelector(
    (state) => state.Products.FetchDetailProduct
  )
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 18, span: 16 },
  };
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false)
  const paramProduct = router.query.id
  const handleChangeImages = (values: []) => {
    form.setFieldsValue({picture:values})
  }
  const createProduct = (value: any) => {
    const payload = { ...value}
    if(paramProduct){
      setIsLoading(true)
      dispatch(
        updateProduct({
          data: {...payload, _id: paramProduct},
          cbSuccess: () => {
            form.resetFields();
            setIsLoading(false)
            message.success('Add new product success')
            router.push('/products')
          },
          cbError: ()=>{
            setIsLoading(false)
          }
        })
      )
    }
    else{
      setIsLoading(true)
      dispatch(
        addNewProduct({
          data: payload,
          cbSuccess: () => {
            form.resetFields();
            setIsLoading(false)
            message.success('update product success')
            router.push('/products')
          },
          cbError: ()=>{            
            setIsLoading(false)
          }
        })
      )
    }
  };
  //get api
  useEffect(() => {
    dispatch(fetchDataCategories())
    if (paramProduct) {
      dispatch(fetchDetailProduct({ params: { id: paramProduct } }))
    }else{
      dispatch(clearDataState())
    }
  }, [dispatch, paramProduct])
  //get data
  useEffect(() => {
    if(detailProduct && paramProduct){
      form.setFieldsValue({...detailProduct})
      if(detailProduct.image){
        form.setFieldsValue({picture: detailProduct.image})
      }
    }    
  }, [detailProduct, form, paramProduct])
  const listOptionCategory = listCategories?.map((item: any) => <Option value={item._id} key={item._id}>{item.categoryName}</Option>)
  
  return (
    <Form form={form} onFinish={createProduct} {...layout} >
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
      >
        <CKEditor
          editor={ClassicEditor}
          data={detailProduct?.description ? detailProduct?.description : '<p></p>'}
          onChange={(event: any, editor: any) => {
            form.setFieldsValue({description:editor.getData()})
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
        rules={[{ required: true }]}
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
      <Form.Item name='status' label='Status' valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item name='picture' label='Picture' rules={[{ required: true }]}>
        <ProductImages handleChangeImages={handleChangeImages} defaultImage={detailProduct? detailProduct?.image : {}}/>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit' loading={isLoading}>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default ProductGeneral;
