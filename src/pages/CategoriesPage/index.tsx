import React from 'react';

//components
import HeaderPage from '../../components/HeaderPage';
import CategoriesTable from './components/CategoriesTable';

const CategoriesPage = () => {
  return (
    <>
      <HeaderPage title='Categories' />
      <CategoriesTable />
    </>
  );
};

export default CategoriesPage;
