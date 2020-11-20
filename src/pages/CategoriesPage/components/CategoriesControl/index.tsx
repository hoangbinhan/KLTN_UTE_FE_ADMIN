//libs
import React, { useEffect, useState } from 'react';
import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import queryString from "query-string";
//components
import ModalCategories from '../ModalCategories';
//others
import './style.scss';
//hooks
import { useRouter } from "@/hooks";
import { useDebounce } from "@/hooks/useDebounce";

const {Option} = Select

const CategoriesControl = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const debouncedValue = useDebounce(value, 300);
  const { push } = router;
  useEffect(() => {
    if (debouncedValue === "") {
      const parsed = queryString.parse(router.location.search);
      delete parsed.text;
      push(`${router.pathname}?${queryString.stringify({ ...parsed })}`); // eslint-disable-next-line
      return;
    }
    const link = { text: debouncedValue };
    const parsed = queryString.parse(router.location.search);
    push(`${router.pathname}?${queryString.stringify({ ...parsed, ...link })}`); // eslint-disable-next-line
  }, [debouncedValue]);
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
    <div className='categories-control-wrapper'>
      <div className='categories-control-filter'>
        <Input
          placeholder='input search text'
          prefix={
            <SearchOutlined
              style={{ fontSize: 20, marginRight: 10, color: '#72777a' }}
            />
          }
          style={{ width: 300 }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Select defaultValue='' onChange={handleChangeSelect} style={{width: 100, marginLeft: '1rem'}}>
          <Option value=''>ALL</Option>
          <Option value='ACTIVE'>ACTIVE</Option>
          <Option value='DISABLE'>DISABLE</Option>
        </Select>
      </div>
      <ModalCategories name='Add new' />
    </div>
  );
};

export default CategoriesControl;
