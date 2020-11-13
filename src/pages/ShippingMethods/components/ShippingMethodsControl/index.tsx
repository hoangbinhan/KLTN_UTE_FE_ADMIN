//libs
import React from 'react';
//others
import './style.scss';
import ShippingMethodsModal from '../ShippingMethodsModal';

const ShippingMethodsControl = () => {
  return (
    <div className='shipping-methods-control-wrapper'>
      <ShippingMethodsModal name='Add new' />
    </div>
  );
};

export default ShippingMethodsControl;
