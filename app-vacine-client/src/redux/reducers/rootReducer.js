/**
 * Created by Sherlock on 05.09.2021.
 */
import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {locationReducer} from "./locationReducer";
import {laboReducer} from "./laboReducer";
import {resultReducer} from "./resultReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    location: locationReducer,
    labo: laboReducer,
    user: resultReducer
});