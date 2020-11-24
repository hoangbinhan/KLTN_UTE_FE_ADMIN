import {TYPES} from '@/constants/actions/Categories'
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
        case TYPES.ADD_NEW_CATEGORY_LOADING:
            return {
                ...state,
                isSuccess: false,
                isLoading: true,
                isError: false,
                error:{}
            };
        case TYPES.ADD_NEW_CATEGORY_SUCCESS:
            return{
                ...state,
                isSuccess: true,
                isLoading: false,
                isError: false,
                error: {}
            };
        case TYPES.ADD_NEW_CATEGORY_ERROR:
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