//libs
import React, { useState } from 'react';
import { Button, Tabs } from 'antd';
//components
import ProductGeneral from '../ProductGeneral';
import ProductDescription from '../ProductDescription';
import ProductConfiguration from '../ProductConfiguration';
import ProductImages from '../ProductImages';
//others
import './style.scss'

const { TabPane } = Tabs;

const DetailProductTab = () => {
  const [activeKey, setActiveKey] = useState('1')
  const callback = (key: any) => {
    setActiveKey(key)
  };
  const handleNextTab = () => {
    let next = String(parseInt(activeKey) + 1)
    if (next === '5') {
      next = '1'
    }
    setActiveKey(next)
    console.log('activeKey', activeKey)
  }

  return (
    <>
      <div className="detail-product-tab-wrapper">
        <Tabs activeKey={activeKey} onChange={callback}>
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
      </div>
      <Button onClick={handleNextTab} style={{ marginTop: 20 }} type='primary'>Next</Button>
    </>
  );
};

export default DetailProductTab;
