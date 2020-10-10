//Libs
import React from 'react';
//components
import HeaderPage from '@/components/HeaderPage';
import ProductsTable from './ProductsTable';

//others
const ProductsPage = () => {
  return (
    <>
      <HeaderPage title='Products' />
      <ProductsTable />
    </>
  );
};

export default ProductsPage;
