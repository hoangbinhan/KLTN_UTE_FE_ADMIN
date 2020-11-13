//Libs
import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
//components
import ShippingMethodsControl from '../ShippingMethodsControl'
//other
import { columns } from '../../DataSource/ShippingMethodColumns';
//actions
import {fetchDataShippingMethod} from '@/actions/ShippingMethod/FetchDataShippingMethod'
//hooks
import { useTypedSelector } from '@/hooks';

const ShippingMethodsTable = () => {
  const dispatch = useDispatch()
  const { listShippingMethod, isLoading } = useTypedSelector(
    (state) => state.ShippingMethod.FetchDataShippingMethod
  )
  const { addSuccess } = useTypedSelector(
    (state) => state.ShippingMethod.AddNewShippingMethod
  )
  const { updateSuccess } = useTypedSelector(
    (state) => state.ShippingMethod.UpdateShippingMethod
  )
  const {deleteSuccess} = useTypedSelector(
    (state)=> state.ShippingMethod.DeleteShippingMethod
  )
  useEffect(() => {
    dispatch(fetchDataShippingMethod())
  }, [dispatch, addSuccess, updateSuccess, deleteSuccess])
  const data = listShippingMethod.map((item: any) => {
    return { ...item, key: item._id }
  })
  return (
    <>
      <ShippingMethodsControl/>
      <Table
        columns={columns}
        dataSource={data}
        loading={isLoading}
      />
    </>
  );
};

export default ShippingMethodsTable;
