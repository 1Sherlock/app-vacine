/**
 * Created by Sherlock on 05.09.2021.
 */
import {UPDATESTATE} from "../types/locationType";

const initialState = {
    isLoading: false,
    locations: [],
    search: [],
    selectedId: null,
    isDeleteModalShow: false
}

export const locationReducer = (state = initialState, action) => {
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