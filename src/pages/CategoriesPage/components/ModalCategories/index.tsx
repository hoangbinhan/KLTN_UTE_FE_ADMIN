//libs
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

type Props = {
  name: String;
};

const ModalCategories: React.FC<Props> = (props) => {
  const { name } = props;
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

  return (
    <>
      <Button type='primary' onClick={showModal}>
        {name}
      </Button>
      <Modal
        title='Basic Modal'
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};

export default ModalCategories;
