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
import { clearDataState } from '@/actions/Products/ClearState'
//others
import './style.scss';
import { getBase64 } from '@/utils'
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
  const [dataEditor, setDataEditor] = useState('')
  const paramProduct = router.query.id
  const handleChangeImages = (values: []) => {
    form.setFieldsValue({ picture: values })
  }
  const createProduct = async (values: any) => {
    let images = []
    for (let i = 0; i < values.picture?.length; i++) {
      if (values.picture[i]?.url) {
        continue
      } else {
        const temp = await getBase64(values.picture[i]?.originFileObj)
        await images.push(temp)
      }
    }
    const result = await { ...values, images }

    if (paramProduct) {
      setIsLoading(true)
      dispatch(
        updateProduct({
          data: { ...result, _id: paramProduct, status: result?.status ? 'ACTIVE' : 'DISABLE' },
          cbSuccess: () => {
            form.resetFields();
            setIsLoading(false)
            message.success('Update product success')
            router.push('/products')
          },
          cbError: () => {
            setIsLoading(false)
          }
        })
      )
    }
    else {
      setIsLoading(true)
      dispatch(
        addNewProduct({
          data: { ...result, status: result?.status ? 'ACTIVE' : 'DISABLE' },
          cbSuccess: () => {
            form.resetFields();
            setIsLoading(false)
            message.success('Add new product success')
            router.push('/products')
          },
          cbError: () => {
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
    } else {
      dispatch(clearDataState())
    }
  }, [dispatch, paramProduct])
  //get data
  useEffect(() => {
    if (detailProduct && paramProduct) {
      form.setFieldsValue({ ...detailProduct })
      setDataEditor(detailProduct.description)
    }
    else {
      setDataEditor('')
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
        <Input placeholder='input the product name...' />
      </Form.Item>
      <Form.Item
        name='description'
        label='Description'
      >
        <CKEditor
          editor={ClassicEditor}
          data={dataEditor}
          onChange={(event: any, editor: any) => {
            form.setFieldsValue({ description: editor.getData() })
          }}
          className='ck-editor__editable'
        />
      </Form.Item>
      <Form.Item name='quantity' label='Quantity' rules={[{ required: true }]}>
        <Input type='number' placeholder='input the quantity...' />
      </Form.Item>
      <Form.Item name='price' label='Price' rules={[{ required: true }]}>
        <Input type='number' placeholder='input the price...' />
      </Form.Item>
      <Form.Item
        name='discountPrice'
        label='Discount Price'
      >
        <Input type='number' placeholder='input the discount price...' />
      </Form.Item>
      <Form.Item
        name='guarantee'
        label='Guarantee'
        rules={[{ required: true }]}
      >
        <Input type='number' placeholder='input the guarantee (month)...' />
      </Form.Item>
      <Form.Item name='category' label='Category'>
        <Select placeholder='select the category' mode="multiple" allowClear>{listOptionCategory}</Select>
      </Form.Item>
      <Form.Item name='status' label='Status' valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item name='picture' label='Picture'>
        <ProductImages handleChangeImages={handleChangeImages} defaultImage={detailProduct ? detailProduct?.image : {}} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit' loading={isLoading}>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default ProductGeneral;
