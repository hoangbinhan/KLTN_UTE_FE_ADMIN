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
    <div className='product-filter-wrapper'>
      <div className="product-filter-control">
        <Search
          placeholder='Search...'
          onSearch={(value) => console.log(value)}
          className='search-input'
        />
        <Select defaultValue='all' style={{ width: 120 }} onChange={handleChange}>
          <Option value='all'>All</Option>
          <Option value='enable'>Enable</Option>
          <Option value='disable'>Disable</Option>
        </Select>
      </div>
      <Link
        to={CONSTANTS.ROUTERS.CREATE_PRODUCT}
        className='button-primary'
      >
        Add new
      </Link>
    </div>
  );
};

export default ProductsFilter;
