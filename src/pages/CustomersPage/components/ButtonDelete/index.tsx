//libs
import React from 'react'
import { useDispatch } from 'react-redux'
import { message, Button, Popconfirm } from 'antd'
//actions
import { deleteCustomer } from '@/actions/Customers/DeleteCustomer'

interface Props {
    customerId: String
}

const ButtonDelete: React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    const { customerId } = props
    const confirmDelete = (value: String) => {
        dispatch(
            deleteCustomer({
                data: { customerID: value },
                cbSuccess: () => (
                    message.success('Delete success')
                )
            }),
        )
    }
    return (
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={(value) => confirmDelete(customerId)}>
            <Button danger>Delete</Button>
        </Popconfirm>
    )
}

export default ButtonDelete
