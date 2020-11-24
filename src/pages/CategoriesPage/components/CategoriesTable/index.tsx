//Libs
import React, { useEffect } from 'react';
import { Table } from 'antd';
import CategoriesControl from '../CategoriesControl';
import { useDispatch } from 'react-redux';
//components
//hooks
import { useRouter, useTypedSelector } from '@/hooks';
//actions
import { fetchDataCategories } from '@/actions/Categories/FetchDataCategories';
//other
import { columns } from '../../DataSource/CategoriesColumn';

const CategoriesTable = () => {
  const query = useRouter().query
  const dispatch = useDispatch()
  const { listCategories, isLoading } = useTypedSelector(
    (state) => state.Categories.FetchDataCategories
  )
  const { isSuccess } = useTypedSelector(
    (state) => state.Categories.AddNewCategory
  )
  const { updateSuccess } = useTypedSelector(
    (state) => state.Categories.UpdateCategory
  )
  const { deleteSuccess } = useTypedSelector(
    (state) => state.Categories.DeleteCategory
  )
  const { isAddChildrenSuccess } = useTypedSelector(
    (state) => state.Categories.AddChildrenCategory
  )
  useEffect(() => {
    dispatch(fetchDataCategories({params: query}))
  }, [dispatch, isSuccess, updateSuccess, isAddChildrenSuccess, deleteSuccess, query])
  const data = listCategories.map((item: any) => {
    return { ...item, key: item._id }
  })  
  return (
    <>
      <CategoriesControl />
      <Table
        columns={columns}
        dataSource={[...data]}
        loading={isLoading}
        pagination={false}
      />
    </>
  );
};

export default CategoriesTable;
