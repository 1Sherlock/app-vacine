import {UPDATESTATE} from "../types/locationType";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";

/**
 * Created by Sherlock on 05.09.2021.
 */
export function updateState(state) {
    return {
        type: UPDATESTATE,
        payload: state
    }
}

export const save = (v, history) => (dispatch) => {
    dispatch(updateState({isLoading: true}));

    axios.post(API_PATH + "analise_place/save", v)
        .then(res => {
            if (res.data.success){
                toast.success(res.data.message);
                dispatch(getLocations());
                // dispatch(updateState({isModalVisible: false, selectedShop: null}));
                history.push("/sampling");
            }
        })
        .catch((err) => {
            if (err.response){
                toast.error(err.response.data.message)
            }
        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}

export const getLocations = () => (dispatch) => {
    axios.get(API_PATH + "analise_place")
        .then(res => {
            dispatch(updateState({
                locations: res.data.data,
                search: res.data.data
            }))
        })
}

export const search = (word) => (dispatch, getState) => {
    dispatch(updateState({search: getState().location.locations.filter(item => item.nameRu.toLowerCase().includes(word.toLowerCase()) || item.nameEn.toLowerCase().includes(word.toLowerCase()))}))
}

export const deleteLocation = () => (dispatch, getState) => {
    dispatch(updateState({isLoading: true}));

    axios.delete(API_PATH + "analise_place/" + getState().location.selectedId)
        .then(res => {
            toast.success(res.data.message);
            dispatch(getLocations());
            dispatch(updateState({isDeleteModalShow: false, selectedId: null}));
        })
        .catch((err) => {
            if (err.response){
                toast.error(err.response.data.message)
            }
        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}