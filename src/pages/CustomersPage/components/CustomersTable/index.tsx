//libs
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Table } from 'antd'
//actions
import { fetchDataCustomers } from '@/actions/Customers/FetchDataCustomers'
//components
import CustomersControl from '../CustomersControl'
//others
import { columns } from '../../DataSource/CustomersColumn'
//hooks
import { useTypedSelector } from '@/hooks'

const CustomersTable = () => {
    const dispatch = useDispatch()
    const { listCustomers, isLoading } = useTypedSelector(
        (state) => state.Customers.FetchDataCustomers
    )
    const { addSuccess } = useTypedSelector(
        (state) => state.Customers.AddNewCustomer
    )
    const { deleteSuccess } = useTypedSelector(
        (state) => state.Customers.DeleteCustomer
    )
    const { updateSuccess } = useTypedSelector(
        (state) => state.Customers.UpdateCustomer
    )
    useEffect(() => {
        dispatch(fetchDataCustomers())
    }, [dispatch, addSuccess, deleteSuccess, updateSuccess])
    const data = listCustomers?.map((item: any) => {
        return { ...item, key: item._id }
    })
    return (
        <>
            <CustomersControl />
            <Table columns={columns} dataSource={data} loading={isLoading} />
        </>
    )
}


export default CustomersTable
