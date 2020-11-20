//libs
import React, { useEffect } from 'react'
import {Select} from 'antd'
import queryString from "query-string";
import {useDispatch} from 'react-redux'
//actions
import {fetchDataCategories} from '@/actions/Categories/FetchDataCategories'
//hooks
import { useRouter, useTypedSelector } from "@/hooks";
//other
import './style.scss'

const {Option} = Select

const Category = () => {
    const dispatch = useDispatch()
    const router = useRouter();
    const handleChangeSelect = (value:string)=>{
        let currentParam = { ...router.query};
        if(value===''){
          delete currentParam.category
        }else{
          currentParam = { ...router.query, category: value };
        }
        router.push(`${router.pathname}?${queryString.stringify(currentParam)}`);
    }
    const { listCategories } = useTypedSelector(
        (state) => state.Categories.FetchDataCategories
    )
    useEffect(() => {
        dispatch(fetchDataCategories())
    }, [dispatch])
    const data = listCategories?.map((item:any)=><Option key={item._id} value={item.categoryName}>{item.categoryName}</Option>)
    return (
        <Select
            className='filter-control-category-wrapper'
            mode="multiple"
            allowClear
            placeholder="Select category"
            onChange={handleChangeSelect}
            >
            {data}
        </Select>
    )
}


export default Category
