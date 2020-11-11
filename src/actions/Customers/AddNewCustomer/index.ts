// types
import { TYPES } from '@/constants/actions/Customers';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const addNewCustomer = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
   url: CONSTANTS.ENDPOINTS.CUSTOMERS,
   method: 'POST',
   cbSuccess,
   payload: data,
   LOADING_ACTION: TYPES.ADD_NEW_CUSTOMER_LOADING,
   SUCCESS_ACTION: TYPES.ADD_NEW_CUSTOMER_SUCCESS,
   ERROR_ACTION: TYPES.ADD_NEW_CUSTOMER_ERROR,
 });


