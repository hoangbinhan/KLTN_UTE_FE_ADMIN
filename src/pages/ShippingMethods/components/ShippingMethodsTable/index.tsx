//Libs
import React from 'react';
import { Table } from 'antd';
//components
import ShippingMethodsControl from '../ShippingMethodsControl'
//other
import { columns } from '../../DataSource/ShippingMethodColumns';

const ShippingMethodsTable = () => {
  return (
    <>
      <ShippingMethodsControl/>
      <Table
        columns={columns}
        dataSource={[]}
      />
    </>
  );
};

export default ShippingMethodsTable;
