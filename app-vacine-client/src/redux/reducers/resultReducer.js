/**
 * Created by Sherlock on 05.09.2021.
 */
import {UPDATESTATE} from "../types/resultType";

const initialState = {
    isLoading: false,
    results: [],
    search: [],
    selectedId: null,
    isDeleteModalShow: false,
    selectedResult: null,
    result: {},
    totalElements: 0,
    totalPages: 0
}

export const resultReducer = (state = initialState, action) => {
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