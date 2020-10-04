//Libs
import React from 'react';
import { PageHeader } from 'antd';

//others
import './style.scss';

const HeaderPage = () => {
  return (
    <PageHeader
      className='site-page-header'
      title='Title'
      subTitle='This is a subtitle'
    />
  );
};

export default HeaderPage;
