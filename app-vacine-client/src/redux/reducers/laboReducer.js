/**
 * Created by Sherlock on 05.09.2021.
 */
import {UPDATESTATE} from "../types/laboType";

const initialState = {
    isLoading: false,
    labos: [],
    search: [],
    selectedId: null,
    isDeleteModalShow: false
}

export const laboReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATESTATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}