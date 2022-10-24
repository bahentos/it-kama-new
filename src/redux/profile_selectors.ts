import { ProfileType } from './../types/types';
import { AppStateType } from './redux_store';



export const getProfileSelector = (state: AppStateType) => {
    return state.profilePage.profile
}

export const getIsEditSelector = (state: AppStateType) => {
    return state.profilePage.isEdit
}

export const getProfileItems = (state: AppStateType, item: ProfileType) => {
    return state.profilePage.profile[item]
}


export const getProfileStatusSelector = (state: AppStateType) => {
    return state.profilePage.status
}

export const getPostsDataSelector = (state: AppStateType) => {
    return state.profilePage.postsData
}