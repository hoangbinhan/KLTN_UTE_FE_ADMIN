//libs
import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import queryString from "query-string";
//components
import ModalCategories from '../ModalCategories';
//others
import './style.scss';
//hooks
import { useRouter } from "@/hooks";
import { useDebounce } from "@/hooks/useDebounce";

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
  return (
    <div className='categories-control-wrapper'>
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
      <ModalCategories name='Add new' />
    </div>
  );
};

export default CategoriesControl;
