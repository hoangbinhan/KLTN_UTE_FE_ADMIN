// types
import { TYPES } from '@/constants/actions/Customers';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const deleteCustomer = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
   url: CONSTANTS.ENDPOINTS.CUSTOMERS,
   method: 'DELETE',
   cbSuccess,
   payload: data,
   LOADING_ACTION: TYPES.DELETE_CUSTOMER_LOADING,
   SUCCESS_ACTION: TYPES.DELETE_CUSTOMER_SUCCESS,
   ERROR_ACTION: TYPES.DELETE_CUSTOMER_ERROR,
 });


