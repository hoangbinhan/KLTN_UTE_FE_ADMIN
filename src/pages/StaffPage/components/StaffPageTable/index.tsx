//Libs
import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
import queryString from "query-string";
//components
import StaffControl from '../StaffPageControl';
//hooks
import { useRouter, useTypedSelector } from '@/hooks';
//actions
import { fetchDataStaff } from '@/actions/Staff/FetchDataStaff';
//other
import { columns } from '../../DataSource/StaffColumns';
import './style.scss'
//TODO: make search text

const CategoriesTable = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { listStaff, isLoading } = useTypedSelector(
    (state) => state.Staff.FetchDataStaff
  )
  const { addSuccess } = useTypedSelector(
    (state) => state.Staff.AddNewStaff
  )
  const { updateSuccess } = useTypedSelector(
    (state) => state.Staff.UpdateStaff
  )
  const { deleteSuccess } = useTypedSelector(
    (state) => state.Staff.DeleteStaff
  )
  useEffect(() => {
    dispatch(fetchDataStaff({ params: router.query }))
  }, [dispatch, addSuccess, updateSuccess, deleteSuccess, router.query])
  const data = listStaff?.data?.map((item: any) => {
    return { ...item, key: item._id }
  })
  return (
    <>
      <StaffControl />
      <Table className='staff-table-wrapper' columns={columns} dataSource={data} loading={isLoading} pagination={{
        total: listStaff?.total,
        pageSize: listStaff?.size,
        current: listStaff?.page + 1,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "30", "50", "100"],
        onChange: (page, pageSize) => {
          const currentParam = { ...router.query, page, size: pageSize };
          router.push(
            `${router.pathname}?${queryString.stringify(currentParam)}`
          );
        },
      }}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => { router.push(`${router.pathname}/${record._id}`) }, // click row
          };
        }}
      />
    </>
  );
};

export default CategoriesTable;
