import {TYPES} from '@/constants/actions/Products'
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
        case TYPES.DELETE_PRODUCT_LOADING:
            console.log('is loading');
            return {
                ...state,
                deleteSuccess: false,
                deleteLoading: true,
                deleteError: false,
                error:{}
            };
        case TYPES.DELETE_PRODUCT_SUCCESS:
            console.log('is success');
            return{
                ...state,
                deleteSuccess: true,
                deleteLoading: false,
                deleteError: false,
                error: {}
            };
        case TYPES.DELETE_PRODUCT_ERROR:
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