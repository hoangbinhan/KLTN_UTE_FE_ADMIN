//libs
import React from 'react'
import {Select} from 'antd'
import queryString from "query-string";
//hooks
import { useRouter } from "@/hooks";
//other
import './style.scss'

const {Option} = Select

interface Props {
    options: String[]
}

const Status:React.FC<Props> = (props) => {
    const {options} = props
    const router = useRouter();
    const handleChangeSelect = (value:string)=>{
        let currentParam = { ...router.query};
        if(value===''){
          delete currentParam.status
        }else{
          currentParam = { ...router.query, status: value };
        }
        router.push(`${router.pathname}?${queryString.stringify(currentParam)}`);
    }
    return (
        <Select className='filter-control-status-wrapper' defaultValue={options[0].toString()} onChange={handleChangeSelect}>
            {options.map((item:String)=><Option value={item.toString()}>{item}</Option>)}
        </Select>
    )
}


export default Status
