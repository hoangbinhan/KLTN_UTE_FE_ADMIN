import {TYPES} from '@/constants/actions/Staff'
import {REDUX_ACTION} from '@/types/common'

const initialState = {
    addSuccess: false,
    addLoading: true,
    addError: false,
    error: {}
}

export default function(
    state=initialState,
    {type, payload}:REDUX_ACTION
){
    switch(type){
        case TYPES.ADD_NEW_STAFF_LOADING:
            return {
                ...state,
                addSuccess: false,
                addLoading: true,
                addError: false,
                error:{}
            };
        case TYPES.ADD_NEW_STAFF_SUCCESS:
            return{
                ...state,
                addSuccess: true,
                addLoading: false,
                addError: false,
                error: {}
            };
        case TYPES.ADD_NEW_STAFF_ERROR:
            return{
                ...state,
                addSuccess: false,
                addLoading: false,
                addError: true,
                error: payload.error
            };
        default:
            return  {...state}
    }
}