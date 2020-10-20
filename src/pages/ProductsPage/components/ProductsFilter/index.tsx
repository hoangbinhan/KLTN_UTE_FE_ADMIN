//libs
import React, { useState } from 'react';
import { Modal, Select, Input } from 'antd';
import { Link } from 'react-router-dom';
//other
import CONSTANTS from '@/constants/index';
import './style.scss';

const { Search } = Input;
const { Option } = Select;

const ProductsFilter = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = (e: any) => {
    console.log(e);
    setVisible(false);
  };
  const handleCancel = (e: any) => {
    console.log(e);
    setVisible(false);
  };
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Link
        to={CONSTANTS.ROUTERS.CREATE_PRODUCT}
        className='button-primary'
        onClick={showModal}
      >
        Add new
      </Link>
      <Modal
        title='Basic Modal'
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Search
        placeholder='Search...'
        onSearch={(value) => console.log(value)}
        style={{ width: 200 }}
      />
      <Select defaultValue='all' style={{ width: 120 }} onChange={handleChange}>
        <Option value='all'>All</Option>
        <Option value='enable'>Enable</Option>
        <Option value='disable'>Disable</Option>
      </Select>
    </>
  );
};

export default ProductsFilter;
