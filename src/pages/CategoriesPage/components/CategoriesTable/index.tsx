//Libs
import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';

const CategoriesTable = () => {
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
  const columns = [
    {
      title: 'Category Name',
      dataIndex: 'name',
    },
    {
      title: 'Sort Order',
      dataIndex: 'age',
    },
    {
      title: 'Action',
      dataIndex: 'address',
    },
  ];
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
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
      </>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default CategoriesTable;
