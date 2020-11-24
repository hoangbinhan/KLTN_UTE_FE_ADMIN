//libs
import React, { useEffect, useState }  from 'react'
import {Input} from 'antd'
import queryString from "query-string";
import { SearchOutlined } from '@ant-design/icons';
//hooks
import { useRouter } from "@/hooks";
import { useDebounce } from "@/hooks/useDebounce";
//other
import './style.scss'


const Search = () => {
    const [value, setValue] = useState("");
    const router = useRouter();
    const debouncedValue = useDebounce(value, 300);
    useEffect(() => {
        if (debouncedValue === "") {
          const parsed = queryString.parse(router.location.search);
          delete parsed.text;
          router.push(`${router.pathname}?${queryString.stringify({ ...parsed })}`); // eslint-disable-next-line
          return;
        }
        const link = { text: debouncedValue };
        const parsed = queryString.parse(router.location.search);
        router.push(`${router.pathname}?${queryString.stringify({ ...parsed, ...link })}`); // eslint-disable-next-line
    }, [debouncedValue]);
    return (
        <Input
          className='filter-control-search-wrapper'
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
    )
}


export default Search
