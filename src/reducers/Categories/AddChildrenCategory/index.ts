import {TYPES} from '@/constants/actions/Categories'
import {REDUX_ACTION} from '@/types/common'

const initialState = {
    isAddChildrenSuccess: false,
    isAddChildrenLoading: true,
    isAddChildrenError: false,
    error: {}
}

export default function(
    state=initialState,
    {type, payload}:REDUX_ACTION
){
    switch(type){
        case TYPES.ADD_NEW_CHILDREN_CATEGORY_LOADING:
            return {
                ...state,
                isAddChildrenSuccess: false,
                isAddChildrenLoading: true,
                isAddChildrenError: false,
                error:{}
            };
        case TYPES.ADD_NEW_CHILDREN_CATEGORY_SUCCESS:
            return{
                ...state,
                isAddChildrenSuccess: true,
                isAddChildrenLoading: false,
                isAddChildrenError: false,
                error: {}
            };
        case TYPES.ADD_NEW_CHILDREN_CATEGORY_ERROR:
            return{
                ...state,
                isAddChildrenSuccess: false,
                isAddChildrenLoading: false,
                isAddChildrenError: true,
                error: payload.error
            };
        default:
            return  {...state}
    }
}