//Libs
import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
//hooks
import { useTypedSelector, useRouter } from '@/hooks';
//actions
import { fetchDataProducts } from '@/actions/Products/FetchDataProducts';
//others
import { columns } from '../../DataSource/ProductTableColumn'
//hocs


const ProductsTable = () => {
  const query = useRouter().query
  const dispatch = useDispatch();
  const { listProducts, isLoading } = useTypedSelector(
    (state) => state.Products.FetchDataProducts
  );
  const { updateSuccess } = useTypedSelector(
    (state) => state.Products.UpdateProduct
  )
  const { deleteSuccess } = useTypedSelector(
    (state) => state.Products.DeleteProduct
  )
  useEffect(() => {
    dispatch(fetchDataProducts({params: query}));
  }, [dispatch, updateSuccess, deleteSuccess, query]);
  const data = listProducts?.map((item: any) => {
    return { ...item, key: item._id }
  })
  return (
    <>
      <Table columns={columns} dataSource={data} loading={isLoading} />
    </>
  );
};

export default ProductsTable;
