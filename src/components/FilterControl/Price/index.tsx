//libs
import React from 'react'
import {Select} from 'antd'
import queryString from "query-string";
//hooks
import { useRouter } from "@/hooks";
//other
import './style.scss'

const {Option} = Select


const Price = () => {
    const router = useRouter();
    const handleChangeSelect = (value:string)=>{
        let currentParam = { ...router.query};
        if(value==='0'){
          delete currentParam.sort
        }else{
          currentParam = { ...router.query, sort: value };
        }
        router.push(`${router.pathname}?${queryString.stringify(currentParam)}`);
    }
    return (
        <Select className='filter-control-price-wrapper' defaultValue={'0'} onChange={handleChangeSelect}>
            <Option key={0} value={'0'}>ALL</Option>
            <Option key={1} value={'1'}>ASCENDING</Option>
            <Option key={-1} value={'-1'}>DESCENDING</Option>
        </Select>
    )
}


export default Price
