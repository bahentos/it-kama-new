import { AppStateType } from './redux_store';



export const getAuthUserIdSelector = (state: AppStateType) => {
    return state.auth.id
}

export const getIsAuthSelector = (state: AppStateType) => {
    return state.auth.is_auth
}

export const getAuthLoginSelector = (state: AppStateType) => {
    return state.auth.login
}

export const getAuthEmailSelector = (state: AppStateType) => {
    return state.auth.email
}

export const getAuthIsLoadSelector = (state: AppStateType) => {
    return state.auth.is_load
}

export const getAuthCaptchaURLSelector = (state: AppStateType) => {
    return state.auth.captchaUrl
}