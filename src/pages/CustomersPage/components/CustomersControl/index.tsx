//libs
import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
//components
import ModalCustomers from '../ModalCustomers'
//others
import './style.scss';

const CustomersControl = () => {
  return (
    <div className='categories-control-wrapper'>
      <Input
        placeholder='input search text'
        prefix={
          <SearchOutlined
            style={{ fontSize: 20, marginRight: 10, color: '#72777a' }}
          />
        }
        style={{ width: 300 }}
      />
      <ModalCustomers name='Add new' />
    </div>
  );
};

export default CustomersControl;
