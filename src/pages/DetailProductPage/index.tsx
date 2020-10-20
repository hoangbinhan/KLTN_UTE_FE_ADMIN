//libs
import React from 'react';
//components
import HeaderPage from '@/components/HeaderPage';
import DetailProductTab from './components/DetailProductTab';
//others
import './style.scss';

const DetailProductPage = () => {
  return (
    <>
      <HeaderPage title='Create Product' />
      <DetailProductTab />
    </>
  );
};

export default DetailProductPage;
