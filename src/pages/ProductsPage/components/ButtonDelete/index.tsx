//libs
import React from 'react'
import {useDispatch} from 'react-redux'
import { message, Button, Popconfirm } from 'antd'
//actions
import { deleteProduct } from '@/actions/Products/DeleteProduct'

interface Props{
    productId: String
}

const ButtonDelete:React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    const {productId} = props
    const confirmDelete = (value: String) =>{
        dispatch(
            deleteProduct({
                data:{productID:value},
                cbSuccess: ()=>(
                    message.success('Delete success')
                )
            }),
        )
    }
    return (
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={(value)=>confirmDelete(productId)}>
          <Button danger>Delete</Button>
        </Popconfirm>
    )
}

export default ButtonDelete
