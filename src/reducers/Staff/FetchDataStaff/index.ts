import { TYPES } from '@/constants/actions/Staff';
import { REDUX_ACTION } from '@/types/common';

const initialState = {
  listStaff: [],
  isLoading: true,
  isError: false,
  error: {},
};

export default function (
  state = initialState,
  { type, payload }: REDUX_ACTION
) {
  switch (type) {
    case TYPES.FETCH_DATA_STAFF_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DATA_STAFF_SUCCESS:
      return {
        ...state,
        listStaff: payload.data,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DATA_STAFF_ERROR:
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
