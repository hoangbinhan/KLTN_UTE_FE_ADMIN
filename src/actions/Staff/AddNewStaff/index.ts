// types
import { TYPES } from '@/constants/actions/Staff';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const addNewStaff = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
   url: CONSTANTS.ENDPOINTS.STAFF,
   method: 'POST',
   cbSuccess,
   payload: data,
   LOADING_ACTION: TYPES.ADD_NEW_STAFF_LOADING,
   SUCCESS_ACTION: TYPES.ADD_NEW_STAFF_SUCCESS,
   ERROR_ACTION: TYPES.ADD_NEW_STAFF_ERROR,
 });


