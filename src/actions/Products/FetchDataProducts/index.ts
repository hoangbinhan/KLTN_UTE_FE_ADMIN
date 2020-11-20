// types
import { TYPES } from '@/constants/actions/Products';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const fetchDataProducts = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
    url: CONSTANTS.ENDPOINTS.PRODUCTS,
    method: 'GET',
    cbSuccess,
    payload: data,
    params:params,
    LOADING_ACTION: TYPES.FETCH_DATA_PRODUCTS_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_DATA_PRODUCTS_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_DATA_PRODUCTS_ERROR,
  });
