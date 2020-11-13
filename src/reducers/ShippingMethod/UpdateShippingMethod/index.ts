import {TYPES} from '@/constants/actions/ShippingMethod'
import {REDUX_ACTION} from '@/types/common'

const initialState = {
    updateSuccess: false,
    updateLoading: true,
    updateError: false,
    error:{}
}

export default function(
    state=initialState,
    {type, payload}: REDUX_ACTION
){
    switch(type){
        case TYPES.UPDATE_SHIPPING_METHOD_LOADING:
            return {
                ...state,
                updateSuccess: false,
                updateLoading: true,
                updateError: false,
                error:{}
            };
        case TYPES.UPDATE_SHIPPING_METHOD_SUCCESS:
            return{
                ...state,
                updateSuccess: true,
                updateLoading: false,
                updateError: false,
                error: {}
            };
        case TYPES.UPDATE_SHIPPING_METHOD_ERROR:
            return{
                ...state,
                updateSuccess: false,
                updateLoading: false,
                updateError: true,
                error: payload.error
            };
        default:
            return  {...state}
    }
}