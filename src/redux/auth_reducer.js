import { stopSubmit } from "redux-form";
import { auth_api, security_api } from "../api/api";

const ADD_PROFILE_USER = 'ADD_PROFILE_USER';
const TOGGLE_IS_LOAD = 'TOGGLE_IS_LOAD';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initial_state = {
    id: null,
    login: null,
    email: null,
    is_auth: false,
    //индикатор загрузки информации с сервера
    is_load: false,
    captchaUrl: null
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
        
        case SET_CAPTCHA:
            return { ...state, captchaUrl: action.url }

        default:
            return state;
    }
}

export let add_profile_user = (data, is_auth) => ({ type: ADD_PROFILE_USER, data, is_auth })
export let toggle_is_load = (isLoad) => ({ type: TOGGLE_IS_LOAD, isLoad })
export let set_captcha_url = (url) => ({ type: SET_CAPTCHA, url })

//##Thunk - auth_reducer
export const getAuthThunk = () => async dispatch => {
    dispatch(toggle_is_load(true))
    let response = await auth_api.getAuth()
    if (response.resultCode === 0) {
        dispatch(add_profile_user(response.data, true))
        dispatch(toggle_is_load(false))
    }
}

export const loginThunk = (email, password, rememberMe = false, captcha = null) => async dispatch => {
    dispatch(toggle_is_load(true))
    let response = await auth_api.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(getAuthThunk())
        dispatch(toggle_is_load(false))
    } else {
        if (response.resultCode === 10) {
        dispatch(getCaptchaThunk())
    }
        let messages = response.messages.length > 0 ?
            response.messages : 'Some error'
        dispatch(stopSubmit('login', { _error: messages }))
    }
}

export const getCaptchaThunk = (email, password, rememberMe = false) => async dispatch => {
    const response = await security_api.getCaptcha()
    const url = response.url
    dispatch(set_captcha_url(url))
}

export const logoutThunk = () => async dispatch => {
    dispatch(toggle_is_load(true))
    const response = await auth_api.logout()
    if (response.resultCode === 0) {
        dispatch(add_profile_user(
            { id: null, login: null, email: null }, false))
        dispatch(toggle_is_load(false))
    }
}

export default auth_reducer