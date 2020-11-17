import {TYPES} from '@/constants/actions/Order'
import {REDUX_ACTION} from '@/types/common'

const initialState = {
    isSuccess: false,
    isLoading: false,
    isError: false,
    error: {}
}

export default function(
    state=initialState,
    {type, payload}:REDUX_ACTION
){
    switch(type){
        case TYPES.ADD_NEW_ORDER_LOADING:
            return {
                ...state,
                isSuccess: false,
                isLoading: true,
                isError: false,
                error:{}
            };
        case TYPES.ADD_NEW_ORDER_SUCCESS:
            return{
                ...state,
                isSuccess: true,
                isLoading: false,
                isError: false,
                error: {}
            };
        case TYPES.ADD_NEW_ORDER_ERROR:
            return{
                ...state,
                isSuccess: false,
                isLoading: false,
                isError: true,
                error: payload.error
            };
        default:
            return  {...state}
    }
}