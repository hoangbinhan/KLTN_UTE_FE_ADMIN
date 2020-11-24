// types
import { TYPES } from '@/constants/actions/Customers';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const fetchDetailCustomer = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  {
    return request({
    url: `${CONSTANTS.ENDPOINTS.CUSTOMERS}/${params.id}`,
    method: 'GET',
    cbSuccess,
    payload: data,
    LOADING_ACTION: TYPES.FETCH_DETAIL_PRODUCT_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_DETAIL_PRODUCT_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_DETAIL_PRODUCT_ERROR,
  });}
