import { TYPES } from '@/constants/actions/ShippingMethod';
import { REDUX_ACTION } from '@/types/common';

const initialState = {
  listShippingMethod: [],
  isLoading: true,
  isError: false,
  error: {},
};

export default function (
  state = initialState,
  { type, payload }: REDUX_ACTION
) {
  switch (type) {
    case TYPES.FETCH_DATA_SHIPPING_METHODS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DATA_SHIPPING_METHODS_SUCCESS:
      return {
        ...state,
        listShippingMethod: payload.data,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DATA_SHIPPING_METHODS_ERROR:
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
