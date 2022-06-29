import { createSelector } from 'reselect'

export const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getPageSizeSelector = (state) => {
    return state.usersPage.page_size
}

export const getPageCountSelector = (state) => {
    return state.usersPage.page_count
}

export const getUsersCountSelector = (state) => {
    return state.usersPage.total_users_count
}

export const getCurrentPageSelector = (state) => {
    return state.usersPage.current_page
}

export const getUsersIsLoadSelector = (state) => {
    return state.usersPage.is_load
}

export const getFollowIsLoadSelector = (state) => {
    return state.usersPage.followIsLoad
}