// types
import { TYPES } from '@/constants/actions/Categories';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const addNewCategory = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
   url: CONSTANTS.ENDPOINTS.CATEGORIES,
   method: 'POST',
   cbSuccess,
   payload: data,
   LOADING_ACTION: TYPES.ADD_NEW_CATEGORY_LOADING,
   SUCCESS_ACTION: TYPES.ADD_NEW_CATEGORY_SUCCESS,
   ERROR_ACTION: TYPES.ADD_NEW_CATEGORY_ERROR,
 });


