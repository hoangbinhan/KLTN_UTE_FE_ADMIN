import { TYPES } from '@/constants/actions/Customers';
import { REDUX_ACTION } from '@/types/common';

const initialState = {
  listCustomers: [],
  isLoading: true,
  isError: false,
  error: {},
};

export default function (
  state = initialState,
  { type, payload }: REDUX_ACTION
) {
  switch (type) {
    case TYPES.FETCH_DATA_CUSTOMERS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DATA_CUSTOMERS_SUCCESS:
      return {
        ...state,
        listCustomers: payload.data,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DATA_CUSTOMERS_ERROR:
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
