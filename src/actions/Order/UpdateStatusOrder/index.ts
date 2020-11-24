//types
import {TYPES} from '@/constants/actions/Order'
import {ASYNC_ACTION_TYPE} from '@/types/common'
//other
import CONSTANTS from '@/constants'
import request from '@/utils/request'

export const updateStatusOrder = ({
    params ={},
    data = {},
    cbSuccess
}: ASYNC_ACTION_TYPE = {})=>
    request({
        url: CONSTANTS.ENDPOINTS.ORDER,
        method: 'PUT',
        cbSuccess,
        payload: data,
        LOADING_ACTION: TYPES.UPDATE_STATUS_ORDER_LOADING,
        SUCCESS_ACTION: TYPES.UPDATE_STATUS_ORDER_SUCCESS,
        ERROR_ACTION: TYPES.UPDATE_STATUS_ORDER_ERROR,   
    })
