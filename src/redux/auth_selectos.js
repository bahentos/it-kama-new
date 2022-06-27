


export const getAuthUserIdSelector = (state) => {
    return state.auth.id
}

export const getIsAuthSelector = (state) => {
    return state.auth.is_auth
}

export const getAuthLoginSelector = (state) => {
    return state.auth.login
}

export const getAuthEmailSelector = (state) => {
    return state.auth.email
}

export const getAuthIsLoadSelector = (state) => {
    return state.auth.is_load
}