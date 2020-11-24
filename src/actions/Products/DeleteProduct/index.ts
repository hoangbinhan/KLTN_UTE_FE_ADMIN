// types
import { TYPES } from '@/constants/actions/Products';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const deleteProduct = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
   url: CONSTANTS.ENDPOINTS.PRODUCTS,
   method: 'DELETE',
   cbSuccess,
   payload: data,
   LOADING_ACTION: TYPES.DELETE_PRODUCT_LOADING,
   SUCCESS_ACTION: TYPES.DELETE_PRODUCT_SUCCESS,
   ERROR_ACTION: TYPES.DELETE_PRODUCT_ERROR,
 });


