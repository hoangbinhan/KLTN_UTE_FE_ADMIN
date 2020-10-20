//Libs
import React from 'react';
//components
import HeaderPage from '@/components/HeaderPage';
import ProductsTable from './components/ProductsTable';
import ProductsFilter from './components/ProductsFilter';

//others
const ProductsPage = () => {
  return (
    <>
      <HeaderPage title='Products' />
      <ProductsFilter />
      <ProductsTable />
    </>
  );
};

export default ProductsPage;
