import { stopSubmit } from "redux-form";
import { auth_api } from "../api/api";

const ADD_PROFILE_USER = 'ADD_PROFILE_USER';
const TOGGLE_IS_LOAD = 'TOGGLE_IS_LOAD';

let initial_state = {
    id: null,
    login: null,
    email: null,
    is_auth: false,
    //индикатор загрузки информации с сервера
    is_load: false,
}

const auth_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_PROFILE_USER:
            return {
                ...state,
                ...action.data,
                is_auth: action.is_auth
            }
        case TOGGLE_IS_LOAD:
            return { ...state, is_load: action.isLoad }

        default:
            return state;
    }
}

export let add_profile_user = (data, is_auth) => ({ type: ADD_PROFILE_USER, data, is_auth })
export let toggle_is_load = (isLoad) => ({ type: TOGGLE_IS_LOAD, isLoad })

//##Thunk - auth_reducer
export const getAuthThunk = () => async dispatch => {
    dispatch(toggle_is_load(true))
    let response = await auth_api.getAuth()
    if (response.resultCode === 0) {
        dispatch(add_profile_user(response.data, true))
        dispatch(toggle_is_load(false))
    }
}

export const loginThunk = (email, password, rememberMe = false) => async dispatch => {
    dispatch(toggle_is_load(true))
    let response = await auth_api.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthThunk())
        dispatch(toggle_is_load(false))
    } else {
        let messages = response.messages.length > 0 ?
            response.messages : 'Some error'
        dispatch(stopSubmit('login', { _error: messages }))
    }
}

export const logoutThunk = () => async dispatch => {
    dispatch(toggle_is_load(true))
    let response = await auth_api.logout()
    if (response.resultCode === 0) {
        dispatch(add_profile_user(
            { id: null, login: null, email: null }, false))
        dispatch(toggle_is_load(false))
    }
}

export default auth_reducer