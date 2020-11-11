// types
import { TYPES } from '@/constants/actions/Categories';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const deleteCategory = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
   url: CONSTANTS.ENDPOINTS.CATEGORIES,
   method: 'DELETE',
   cbSuccess,
   payload: data,
   LOADING_ACTION: TYPES.DELETE_CATEGORY_LOADING,
   SUCCESS_ACTION: TYPES.DELETE_CATEGORY_SUCCESS,
   ERROR_ACTION: TYPES.DELETE_CATEGORY_ERROR,
 });


