// types
import { TYPES } from '@/constants/actions/Order';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const fetchDetailOrder = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  {
    return request({
    url: `${CONSTANTS.ENDPOINTS.ORDER}/${params.id}`,
    method: 'GET',
    cbSuccess,
    payload: data,
    LOADING_ACTION: TYPES.FETCH_DETAIL_ORDER_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_DETAIL_ORDER_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_DETAIL_ORDER_ERROR,
  });}
