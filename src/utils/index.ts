// libs import
import { message } from 'antd';

/**
 * default http response callback error
 */
export const defaultHttpResponseCbError = (url: string, err: any) => {
  message.error('ERROR detail in console');
  // eslint-disable-next-line no-console
  console.log('URL：', url);
  // eslint-disable-next-line no-console
  console.log('Detail：', err);
};

export const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
