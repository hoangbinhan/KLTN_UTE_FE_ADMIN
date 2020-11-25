//libs
import React, { useEffect, useState } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
//others
import { getBase64 } from '@/utils';

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
        file?.name || file?.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };
  const handleChange = async ({fileList}) => {
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
      const fileList = defaultImage.map((item)=>{
        return {
          uid: item.uid ? item.uid : '',
          name: item.uid ? item.uid : '',
          status: 'done',
          url: item.url ? item.url : ''
        }
      })
      setState({...state, fileList})
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
        listType='picture-card'
        fileList={state.fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        multiple={true}
        beforeUpload={()=>false}
        width={100}
      >
        {state.fileList.length >= 6 ? null : uploadButton}
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
