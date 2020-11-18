import { TYPES } from '@/constants/actions/Order';
import { REDUX_ACTION } from '@/types/common';

const initialState = {
  listOrders: [],
  isLoading: true,
  isError: false,
  error: {},
};

export default function (
  state = initialState,
  { type, payload }: REDUX_ACTION
) {
  switch (type) {
    case TYPES.FETCH_DATA_ORDERS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DATA_ORDERS_SUCCESS:
      return {
        ...state,
        listOrders: payload.data.data,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DATA_ORDERS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    default:
      return { ...state };
  }
}
