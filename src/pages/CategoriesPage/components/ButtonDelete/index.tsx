//libs
import React from 'react'
import {useDispatch} from 'react-redux'
import { message, Button, Popconfirm } from 'antd'
//actions
import { deleteCategory } from '@/actions/Categories/DeleteCategory'

interface Props{
    categoryId: String
}

const ButtonDelete:React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    const {categoryId} = props
    const confirmDelete = (value: String) =>{
        dispatch(
            deleteCategory({
                data:{categoryID:value},
                cbSuccess: ()=>(
                    message.success('Delete success')
                )
            }),
        )
    }
    return (
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={(value)=>confirmDelete(categoryId)}>
          <Button style={{marginLeft: '1rem'}} danger>Delete</Button>
        </Popconfirm>
    )
}

export default ButtonDelete
