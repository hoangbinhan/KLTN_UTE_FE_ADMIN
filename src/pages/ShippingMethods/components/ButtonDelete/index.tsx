//libs
import React from 'react'
import {useDispatch} from 'react-redux'
import { message, Button, Popconfirm } from 'antd'
//actions
import { deleteShippingMethod } from '@/actions/ShippingMethod/DeleteShippingMethod'

interface Props{
    shippingMethodId: String
}

const ButtonDelete:React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    const {shippingMethodId} = props
    const confirmDelete = (value: String) =>{
        dispatch(
            deleteShippingMethod({
                data:{_id:value},
                cbSuccess: ()=>(
                    message.success('Delete success')
                )
            }),
        )
    }
    return (
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={(value)=>confirmDelete(shippingMethodId)}>
          <Button danger>Delete</Button>
        </Popconfirm>
    )
}

export default ButtonDelete
