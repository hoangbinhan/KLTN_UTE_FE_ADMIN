//libs
import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

//others
import './style.scss';
import ModalCategories from '../ModalCategories';

const CategoriesControl = () => {
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
      <ModalCategories name='Add new' />
    </div>
  );
};

export default CategoriesControl;
