//libs
import React from 'react';
import { Table } from 'antd';
//other
import './style.scss';
import { columns } from '../../DataSource/ProductConfiguration';
import ModalAddConfiguration from '../ModalAddConfiguration';

const ProductConfiguration = () => {
  const data = [
    {
      title: 'Bộ xử lý	',
      info: 'G5420',
    },
    {
      title: 'Bộ xử lý	',
      info: 'G5420',
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      footer={() => <ModalAddConfiguration />}
      pagination={false}
    />
  );
};

export default ProductConfiguration;
