// types
import { TYPES } from '@/constants/actions/Categories';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const fetchDataCategories = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
    url: CONSTANTS.ENDPOINTS.CATEGORIES,
    method: 'GET',
    cbSuccess,
    params: params,
    payload: data,
    LOADING_ACTION: TYPES.FETCH_DATA_CATEGORIES_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_DATA_CATEGORIES_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_DATA_CATEGORIES_ERROR,
  });
