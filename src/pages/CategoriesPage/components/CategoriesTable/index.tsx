//Libs
import React, { useEffect } from 'react';
import { Table } from 'antd';
import CategoriesControl from '../CategoriesControl';
import { useDispatch } from 'react-redux';
//components
import ProductCategory from '../ProductCategory';
//hooks
import { useTypedSelector } from '@/hooks';
//actions
import { fetchDataCategories } from '@/actions/Categories/FetchDataCategories';
//other
import { columns } from '../../DataSource/CategoriesColumn';

const CategoriesTable = () => {
  const dispatch = useDispatch()
  const { listCategories } = useTypedSelector(
    (state) => state.Categories.FetchDataCategories
  )
  useEffect(() => {
    dispatch(fetchDataCategories())
  }, [])

  console.log('listCategories', listCategories)

  return (
    <>
      <CategoriesControl />
      <Table
        columns={columns}
        dataSource={[]}
      // expandable={{
      //   expandedRowRender: ProductCategory,
      // }}
      />
    </>
  );
};

export default CategoriesTable;
