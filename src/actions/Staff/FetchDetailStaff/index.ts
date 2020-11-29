// types
import { TYPES } from '@/constants/actions/Staff';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const fetchDetailStaff = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  {
    return request({
    url: `${CONSTANTS.ENDPOINTS.STAFF}/${params}`,
    method: 'GET',
    cbSuccess,
    payload: data,
    LOADING_ACTION: TYPES.FETCH_DETAIL_STAFF_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_DETAIL_STAFF_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_DETAIL_STAFF_ERROR,
  });}
