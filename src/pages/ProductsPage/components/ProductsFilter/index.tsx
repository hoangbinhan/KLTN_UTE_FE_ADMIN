//libs
import React from 'react';
import { Select, Input } from 'antd';
import { Link } from 'react-router-dom';
//other
import CONSTANTS from '@/constants/index';
import './style.scss';

const { Search } = Input;
const { Option } = Select;

const ProductsFilter = () => {
  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Link
        to={CONSTANTS.ROUTERS.CREATE_PRODUCT}
        className='button-primary'
      >
        Add new
      </Link>
      <Search
        placeholder='Search...'
        onSearch={(value) => console.log(value)}
        style={{ width: 200 }}
      />
      <Select defaultValue='all' style={{ width: 120 }} onChange={handleChange}>
        <Option value='all'>All</Option>
        <Option value='enable'>Enable</Option>
        <Option value='disable'>Disable</Option>
      </Select>
    </>
  );
};

export default ProductsFilter;
