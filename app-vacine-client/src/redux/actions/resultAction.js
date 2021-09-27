import {UPDATESTATE} from "../types/resultType";
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

export const save = (v, history, edit) => (dispatch) => {
    dispatch(updateState({isLoading: true}));

    // const date = new Date();
    // const HH = date.getHours() - 4 > 0 ? date.getHours() - 4 : date.getHours() + 8;
    // const MM =new Date().getMinutes();

    axios.post(API_PATH + "patient/save", {...v, id: edit})
        .then(res => {
            if (res.data.success) {
                toast.success(res.data.message);
                dispatch(getResults(0, ""));
                // dispatch(updateState({isModalVisible: false, selectedShop: null}));
                history.push("/dashboard");
            }
        })
        .catch((err) => {
            if (err.response) {
                toast.error(err.response.data.message)
            }
        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}

export const getResults = (page, search) => (dispatch) => {
    axios.get(API_PATH + "patient?size=15&page=" + page + "&search=" + search)
        .then(res => {
            dispatch(updateState({
                results: res.data.data.content,
                // search: res.data.data.content,
                page: page,
                totalElements: res.data.data.totalElements,
                totalPages: res.data.data.totalPages
            }))
        })
}
export const getResult = (id) => (dispatch) => {
    axios.get(API_PATH + "patient/" + id)
        .then(res => {
            // let date = res.data.data.analiseDate;
            // let arr = date.split('T');
            // let st = arr[0].split("-").reverse().join(".");
            dispatch(updateState({
                result: {...res.data.data},
            }))
        })
}
// export const search = (word) => (dispatch, getState) => {
//     dispatch(updateState({search: getState().location.locations.filter(item => item.nameRu.toLowerCase().includes(word.toLowerCase()) || item.nameEn.toLowerCase().includes(word.toLowerCase()))}))
// }

export const deleteResult = () => (dispatch, getState) => {
    dispatch(updateState({isLoading: true}));

    axios.delete(API_PATH + "patient/" + getState().user.selectedId)
        .then(res => {
            toast.success(res.data.message);
            dispatch(getResults(0, ""));
            dispatch(updateState({isDeleteModalShow: false, selectedId: null}));
        })
        .catch((err) => {
            if (err.response) {
                toast.error(err.response.data.message)
            }
        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}
