//Libs
import React from 'react';
import { PageHeader } from 'antd';

//others
import './style.scss';

interface Props {
  title: string;
}
const HeaderPage: React.FC<Props> = (props) => {
  const { title } = props;
  return <PageHeader className='site-page-header' title={title} />;
};

export default HeaderPage;
