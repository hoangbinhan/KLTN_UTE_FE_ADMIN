import {TYPES} from '@/constants/actions/Staff'
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
        case TYPES.UPDATE_STAFF_LOADING:
            return {
                ...state,
                updateSuccess: false,
                updateLoading: true,
                updateError: false,
                error:{}
            };
        case TYPES.UPDATE_STAFF_SUCCESS:
            return{
                ...state,
                updateSuccess: true,
                updateLoading: false,
                updateError: false,
                error: {}
            };
        case TYPES.UPDATE_STAFF_ERROR:
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