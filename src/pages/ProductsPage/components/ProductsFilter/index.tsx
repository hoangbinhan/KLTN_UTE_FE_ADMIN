//libs
import React from 'react';
import {  Button } from 'antd';
import { Link } from 'react-router-dom';
//component
import FilterControl from '@/components/FilterControl'
//other
import CONSTANTS from '@/constants/index';
import './style.scss';


const ProductsFilter = () => {
  const options = ['ALL', 'ACTIVE', 'DISABLE']
  return (
    <div className='product-filter-wrapper'>
      <FilterControl isSearch={true} isCategory={true} isStatus={options}/>
      <Link
        to={CONSTANTS.ROUTERS.CREATE_PRODUCT}
      >
        <Button type='primary'>Add new</Button>
      </Link>
    </div>
  );
};

export default ProductsFilter;
