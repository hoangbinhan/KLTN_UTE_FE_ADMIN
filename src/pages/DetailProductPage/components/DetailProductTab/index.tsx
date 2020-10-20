//libs
import React from 'react';
import { Tabs } from 'antd';
//components
import ProductGeneral from '../ProductGeneral';
import ProductDescription from '../ProductDescription';
import ProductConfiguration from '../ProductConfiguration';
import ProductImages from '../ProductImages';

const { TabPane } = Tabs;

const DetailProductTab = () => {
  const callback = (key: any) => {
    console.log(key);
  };

  return (
    <Tabs defaultActiveKey='1' onChange={callback}>
      <TabPane tab='General' key='1'>
        <ProductGeneral />
      </TabPane>
      <TabPane tab='Detail Description' key='2'>
        <ProductDescription />
      </TabPane>
      <TabPane tab='Detail configuration' key='3'>
        <ProductConfiguration />
      </TabPane>
      <TabPane tab='Pictures' key='4'>
        <ProductImages />
      </TabPane>
    </Tabs>
  );
};

export default DetailProductTab;
