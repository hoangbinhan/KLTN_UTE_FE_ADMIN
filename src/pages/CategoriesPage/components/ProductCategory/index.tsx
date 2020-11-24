//libs
import React from 'react';
import { Table } from 'antd';
//other
import { ProductCategoryColumn } from '../../DataSource/ProductCategoryColumn';

const ProductCategory = () => {
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      productCategoryName: `product category ${i}`,
      age: 32,
    });
  }
  return (
    <Table
      columns={ProductCategoryColumn}
      dataSource={data}
      pagination={false}
    />
  );
};

export default ProductCategory;
