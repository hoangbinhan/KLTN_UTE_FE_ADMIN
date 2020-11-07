// types
import { TYPES } from '@/constants/actions/Categories';
import { ASYNC_ACTION_TYPE } from '@/types/common';
// others
import CONSTANTS from '@/constants';
import request from '@/utils/request';

export const updateCategory = ({
  params = {},
  data = {},
  cbSuccess,
}: ASYNC_ACTION_TYPE = {}) =>
  request({
   url: CONSTANTS.ENDPOINTS.CATEGORIES,
   method: 'PUT',
   cbSuccess,
   payload: data,
   LOADING_ACTION: TYPES.UPDATE_CATEGORY_LOADING,
   SUCCESS_ACTION: TYPES.UPDATE_CATEGORY_SUCCESS,
   ERROR_ACTION: TYPES.UPLOAD_CATEGORY_ERROR,
 });


