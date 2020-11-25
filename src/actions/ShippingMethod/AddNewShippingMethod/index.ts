// types
import { TYPES } from '@/constants/actions/ShippingMethod';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const addNewShippingMethod = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
   url: CONSTANTS.ENDPOINTS.SHIPPING_METHODS,
   method: 'POST',
   cbSuccess,
   payload: data,
   LOADING_ACTION: TYPES.ADD_NEW_SHIPPING_METHOD_LOADING,
   SUCCESS_ACTION: TYPES.ADD_NEW_SHIPPING_METHOD_SUCCESS,
   ERROR_ACTION: TYPES.UPDATE_SHIPPING_METHOD_ERROR,
 });


