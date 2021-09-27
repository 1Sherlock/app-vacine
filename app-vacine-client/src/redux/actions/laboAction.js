import {UPDATESTATE} from "../types/laboType";
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

    axios.post(API_PATH + "laboratory/save", v)
        .then(res => {
            if (res.data.success){
                toast.success(res.data.message);
                dispatch(getLabos());
                // dispatch(updateState({isModalVisible: false, selectedShop: null}));
                history.push("/laboratory");
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

export const getLabos = () => (dispatch) => {
    axios.get(API_PATH + "laboratory")
        .then(res => {
            dispatch(updateState({
                labos: res.data.data,
                search: res.data.data
            }))
        })
}

export const search = (word) => (dispatch, getState) => {
    dispatch(updateState({search: getState().labo.labos.filter(item => item.nameRu.toLowerCase().includes(word.toLowerCase()) || item.nameEn.toLowerCase().includes(word.toLowerCase()))}))
}

export const deleteLabo = () => (dispatch, getState) => {
    dispatch(updateState({isLoading: true}));

    axios.delete(API_PATH + "laboratory/" + getState().labo.selectedId)
        .then(res => {
            toast.success(res.data.message);
            dispatch(getLabos());
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