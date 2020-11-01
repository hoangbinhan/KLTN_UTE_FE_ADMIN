//Libs
import React from 'react';
import { Table } from 'antd';
import CategoriesControl from '../CategoriesControl';
//components
import ProductCategory from '../ProductCategory';
//other
import { columns } from '../../DataSource/CategoriesColumn';

const CategoriesTable = () => {
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      categoryName: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <>
      <CategoriesControl />
      <Table
        columns={columns}
        dataSource={data}
        expandable={{
          expandedRowRender: ProductCategory,
        }}
      />
    </>
  );
};

export default CategoriesTable;
