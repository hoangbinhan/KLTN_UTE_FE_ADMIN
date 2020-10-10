//Libs
import React, { useState } from 'react';
import { Table, Button, Modal, Input, Select } from 'antd';

const { Search } = Input;
const { Option } = Select;

const ProductsTable = () => {
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
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
    },
    {
      title: 'Model',
      dataIndex: 'model',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantiy',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
    },
  ];
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      image: `Edward King ${i}`,
      productName: 32,
      model: `London, Park Lane no. ${i}`,
      price: `Edward King ${i}`,
      quantiy: 32,
      status: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <>
      <>
        <Button type='primary' onClick={showModal}>
          Add new
        </Button>
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
        <Select
          defaultValue='all'
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value='all'>All</Option>
          <Option value='enable'>Enable</Option>
          <Option value='disable'>Díable</Option>
        </Select>
      </>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default ProductsTable;
