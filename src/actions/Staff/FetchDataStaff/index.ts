// types
import { TYPES } from '@/constants/actions/Staff';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const fetchDataStaff = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
    url: CONSTANTS.ENDPOINTS.STAFF,
    method: 'GET',
    cbSuccess,
    params,
    payload: data,
    LOADING_ACTION: TYPES.FETCH_DATA_STAFF_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_DATA_STAFF_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_DATA_STAFF_ERROR,
  });
