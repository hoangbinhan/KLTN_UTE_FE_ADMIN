//Libs
import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
//hooks
import { useTypedSelector } from '@/hooks';
//actions
import { fetchDataProducts } from '@/actions/Products/FetchDataProducts';
//others
import { columns } from '../../DataSource/ProductTableColumn'

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { listProducts } = useTypedSelector(
    (state) => state.Products.FetchDataProducts
  );
  useEffect(() => {
    dispatch(fetchDataProducts());
  }, [dispatch]);
  const data = listProducts?.map((item: any) => {
    return { ...item, key: item._id }
  })
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default ProductsTable;
