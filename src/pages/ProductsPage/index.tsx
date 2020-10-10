import React from 'react';
import HeaderPage from '../../components/HeaderPage';
import ProductsTable from './ProductsTable';

const ProductsPage = () => {
  return (
    <>
      <HeaderPage title='Products' />
      <ProductsTable />
    </>
  );
};

export default ProductsPage;
