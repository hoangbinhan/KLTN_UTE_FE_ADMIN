import { TYPES } from '@/constants/actions/Products';
import { REDUX_ACTION } from '@/types/common';

const initialState = {
  listProducts: [],
  isLoading: true,
  isError: false,
  error: {},
};

export default function (
  state = initialState,
  { type, payload }: REDUX_ACTION
) {
  switch (type) {
    case TYPES.FETCH_DATA_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DATA_PRODUCTS_SUCCESS:
      return {
        ...state,
        listProducts: payload.data,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DATA_PRODUCTS_ERROR:
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
