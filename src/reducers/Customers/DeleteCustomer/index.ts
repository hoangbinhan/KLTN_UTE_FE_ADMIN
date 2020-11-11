import {TYPES} from '@/constants/actions/Customers'
import {REDUX_ACTION} from '@/types/common'

const initialState = {
    deleteSuccess: false,
    deleteLoading: true,
    deleteError: false,
    error:{}
}

export default function(
    state=initialState,
    {type, payload}: REDUX_ACTION
){
    switch(type){
        case TYPES.DELETE_CUSTOMER_LOADING:
            return {
                ...state,
                deleteSuccess: false,
                deleteLoading: true,
                deleteError: false,
                error:{}
            };
        case TYPES.DELETE_CUSTOMER_SUCCESS:
            return{
                ...state,
                deleteSuccess: true,
                deleteLoading: false,
                deleteError: false,
                error: {}
            };
        case TYPES.DELETE_CUSTOMER_ERROR:
            return{
                ...state,
                deleteSuccess: false,
                deleteLoading: false,
                deleteError: true,
                error: payload.error
            };
        default:
            return  {...state}
    }
}