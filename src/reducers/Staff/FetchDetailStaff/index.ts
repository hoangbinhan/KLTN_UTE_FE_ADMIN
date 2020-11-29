import { TYPES } from '@/constants/actions/Staff';
import { REDUX_ACTION } from '@/types/common';

const initialState = {
  detailStaff:{},
  isLoading: true,
  isError: false,
  error: {},
};

export default function (
  state = initialState,
  { type, payload }: REDUX_ACTION
) {
  switch (type) {
    case TYPES.FETCH_DETAIL_STAFF_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DETAIL_STAFF_SUCCESS:
      return {
        ...state,
        detailStaff: payload.data.data,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DETAIL_STAFF_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    case 'CLEAR_DATA_STATE':      
      return {
        ...state,
        detailProduct: {},
        isLoading: false,
        isError: false,
        error: {},
      }
    default:
      return { ...state };
  }
}
