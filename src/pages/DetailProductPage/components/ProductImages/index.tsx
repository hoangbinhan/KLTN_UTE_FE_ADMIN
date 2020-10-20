//libs
import React, { useState } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
//others
import { getBase64 } from '@/utils/index';

const ProductImages = () => {
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
  });

  const handleCancel = () => {
    setState({ ...state, previewVisible: false });
  };

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setState({
      ...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  const handleChange = ({ fileList }: any) => setState({ ...state, fileList });

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        listType='picture-card'
        fileList={state.fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {state.fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={state.previewVisible}
        title={state.previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt='example' style={{ width: '100%' }} src={state.previewImage} />
      </Modal>
    </>
  );
};

export default ProductImages;
