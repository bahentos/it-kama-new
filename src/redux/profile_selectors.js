


export const getProfileSelector = (state) => {
    return state.profilePage.profile
}

export const getProfileItems = (state, item) => {
    return state.profilePage.profile[item]
}


export const getProfileStatusSelector = (state) => {
    return state.profilePage.status
}

export const getPostsDataSelector = (state) => {
    return state.profilePage.postsData
}