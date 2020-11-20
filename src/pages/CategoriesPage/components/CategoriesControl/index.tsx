//libs
import React from 'react';
//components
import ModalCategories from '../ModalCategories';
import FilterControl from '@/components/FilterControl'
//others
import './style.scss';


const CategoriesControl = () => {
  const options = ['ALL', 'ACTIVE', 'DISABLE']
  return (
    <div className='categories-control-wrapper'>
      <FilterControl isSearch={true} isStatus={options}/>
      <ModalCategories name='Add new' />
    </div>
  );
};

export default CategoriesControl;
