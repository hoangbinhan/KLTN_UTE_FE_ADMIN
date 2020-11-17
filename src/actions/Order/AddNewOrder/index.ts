// types
import { TYPES } from '@/constants/actions/Order';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const addNewOrder = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
   url: CONSTANTS.ENDPOINTS.ORDER,
   method: 'POST',
   cbSuccess,
   payload: data,
   LOADING_ACTION: TYPES.ADD_NEW_ORDER_LOADING,
   SUCCESS_ACTION: TYPES.ADD_NEW_ORDER_SUCCESS,
   ERROR_ACTION: TYPES.UPDATE_ORDER_SUCCESS,
 });


