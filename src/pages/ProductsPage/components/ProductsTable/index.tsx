//Libs
import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
//hooks
import { useTypedSelector } from '@/hooks';
//actions
import { fetchDataProducts } from '@/actions/Products/FetchDataProducts';

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { listProducts } = useTypedSelector(
    (state) => state.Products.FetchDataProducts
  );
  useEffect(() => {
    dispatch(fetchDataProducts());
  }, [dispatch]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
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
      <Table columns={columns} dataSource={listProducts} />
    </>
  );
};

export default ProductsTable;
