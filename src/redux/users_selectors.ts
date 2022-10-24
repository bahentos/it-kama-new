import { createSelector } from 'reselect';
import { AppStateType } from './redux_store';

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsersSuperSelector: any = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getPageSizeSelector = (state: AppStateType) => {
    return state.usersPage.page_size
}

export const getPageCountSelector = (state: AppStateType) => {
    return state.usersPage.page_count
}

export const getUsersCountSelector = (state: AppStateType) => {
    return state.usersPage.total_users_count
}

export const getCurrentPageSelector = (state: AppStateType) => {
    return state.usersPage.current_page
}

export const getUsersIsLoadSelector = (state: AppStateType) => {
    return state.usersPage.is_load
}

export const getFollowIsLoadSelector = (state: AppStateType) => {
    return state.usersPage.followIsLoad
}