//Libs
import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
import queryString from "query-string";
//hooks
import { useTypedSelector, useRouter } from '@/hooks';
//actions
import { fetchDataProducts } from '@/actions/Products/FetchDataProducts';
//others
import { columns } from '../../DataSource/ProductTableColumn'
//hocs


const ProductsTable = () => {
  const router = useRouter()
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
    dispatch(fetchDataProducts({params: router.query}));
  }, [dispatch, updateSuccess, deleteSuccess, router.query]);
  const data = listProducts?.data?.map((item: any) => {
    return { ...item, key: item._id }
  })
  return (
    <>
      <Table columns={columns} dataSource={data} loading={isLoading} pagination={{
            total: listProducts?.total,
            pageSize: listProducts?.size,
            current: listProducts?.page+1,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30", "50", "100"],
            onChange: (page, pageSize) => {
              const currentParam = { ...router.query, page, size: pageSize };
              router.push(
                `${router.pathname}?${queryString.stringify(currentParam)}`
              );
            },
          }}/>
    </>
  );
};

export default ProductsTable;
