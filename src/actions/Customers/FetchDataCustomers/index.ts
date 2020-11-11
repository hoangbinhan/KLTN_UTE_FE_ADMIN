// types
import { TYPES } from '@/constants/actions/Customers';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const fetchDataCustomers = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
    url: CONSTANTS.ENDPOINTS.CUSTOMERS,
    method: 'GET',
    cbSuccess,
    payload: data,
    LOADING_ACTION: TYPES.FETCH_DATA_CUSTOMERS_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_DATA_CUSTOMERS_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_DATA_CUSTOMERS_ERROR,
  });
