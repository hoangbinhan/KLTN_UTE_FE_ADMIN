//Libs
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Input, Select } from 'antd';
import { useDispatch } from 'react-redux';
//hooks
import { useTypedSelector } from '@/hooks';
//actions
import { fetchDataProducts } from '@/actions/Products/FetchDataProducts';
const { Search } = Input;
const { Option } = Select;

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { listProducts, isLoading, isError, error } = useTypedSelector(
    (state) => state.Products.FetchDataProducts
  );
  console.log('listProducts :>> ', listProducts);
  useEffect(() => {
    dispatch(fetchDataProducts());
  }, [dispatch]);

  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = (e: any) => {
    console.log(e);
    setVisible(false);
  };
  const handleCancel = (e: any) => {
    console.log(e);
    setVisible(false);
  };
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
    },
    {
      title: 'Model',
      dataIndex: 'model',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantiy',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
    },
  ];

  return (
    <>
      <>
        <Button type='primary' onClick={showModal}>
          Add new
        </Button>
        <Modal
          title='Basic Modal'
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Search
          placeholder='Search...'
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
        <Select
          defaultValue='all'
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value='all'>All</Option>
          <Option value='enable'>Enable</Option>
          <Option value='disable'>Díable</Option>
        </Select>
      </>
      <Table columns={columns} dataSource={listProducts} />
    </>
  );
};

export default ProductsTable;
