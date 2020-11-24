// types
import { TYPES } from '@/constants/actions/ShippingMethod';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const fetchDataShippingMethod = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
    url: CONSTANTS.ENDPOINTS.SHIPPING_METHODS,
    method: 'GET',
    cbSuccess,
    payload: data,
    LOADING_ACTION: TYPES.FETCH_DATA_SHIPPING_METHODS_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_DATA_SHIPPING_METHODS_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_DATA_SHIPPING_METHODS_ERROR,
  });
