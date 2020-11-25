// types
import { TYPES } from '@/constants/actions/Order';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const fetchDataOrders = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
    url: CONSTANTS.ENDPOINTS.ORDER,
    method: 'GET',
    cbSuccess,
    params,
    payload: data,
    LOADING_ACTION: TYPES.FETCH_DATA_ORDERS_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_DATA_ORDERS_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_DATA_ORDERS_ERROR,
  });
