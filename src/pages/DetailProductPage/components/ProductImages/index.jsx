//libs
import React, { useEffect, useState } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
//others
import { getBase64 } from '@/utils/index';

const ProductImages = ({ handleChangeImages, defaultImage }) => {
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
  });
  const handleCancel = () => {
    setState({ ...state, previewVisible: false });
  };

  const handlePreview = async (file) => {
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
  const handleChange = ({ fileList }) => {
    handleChangeImages(fileList)
    setState({ ...state, fileList })
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  useEffect(()=>{
    if(defaultImage?.length>0){
      const fileList = [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: defaultImage[0].imageUrl,
        },
      ]
      setState({...state, fileList, previewImage: defaultImage[0].imageUrl})
    }
    else{
      setState({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [],
      })
    }
    // eslint-disable-next-line
  },[defaultImage])

  return (
    <>
      <Upload
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        listType='picture-card'
        fileList={state.fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        multiple={true}
      >
        {state.fileList.length >= 1 ? null : uploadButton}
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
