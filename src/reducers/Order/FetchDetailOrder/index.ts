import { TYPES } from '@/constants/actions/Order';
import { REDUX_ACTION } from '@/types/common';

const initialState = {
  detailOrder:{},
  isLoading: true,
  isError: false,
  error: {},
};

export default function (
  state = initialState,
  { type, payload }: REDUX_ACTION
) {
  switch (type) {
    case TYPES.FETCH_DETAIL_ORDER_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DETAIL_ORDER_SUCCESS:
      return {
        ...state,
        detailOrder: payload.data,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DETAIL_ORDER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    case 'CLEAR_DATA_STATE':
      return {
        ...state,
        detailOrder:{},
        isLoading: true,
        isError: false,
        error: {},
      }
    default:
      return { ...state };
  }
}
