/**
 * Created by Sherlock on 05.09.2021.
 */
import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";
import {UPDATESTATE} from "../types/authType";
import {toast} from "react-toastify";

export function updateState(state) {
    return {
        type: UPDATESTATE,
        payload: state
    }
}

export const login = (values, history) => (dispatch) => {
    dispatch(updateState({isLoading: true}))
    axios.post(API_PATH + "auth/login", values)
        .then(async res => {
            if (res.data.accessToken) {
                await localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken);
                history.push("/dashboard");
            }
            console.log(res);
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