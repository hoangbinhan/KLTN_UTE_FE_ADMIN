//libs
import React from 'react';
//components
import FilterControl from '@/components/FilterControl'
import ModalAddNew from '../ModalAddNew'
//others
import './style.scss';


const StaffPageControl = () => {
  const options = ['ALL', 'ACTIVE', 'DISABLE']
  return (
    <div className='categories-control-wrapper'>
      <FilterControl isSearch={true} isStatus={options}/>
      <ModalAddNew/>
    </div>
  );
};

export default StaffPageControl;
