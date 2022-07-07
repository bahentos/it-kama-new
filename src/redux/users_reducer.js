import { follow_api, users_api } from "../api/api";
import { updateObjectInArrayForFollowed } from '../compontents/Common/functions/object-helper';

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const TOGGLE_IS_LOAD = 'TOGGLE_IS_LOAD';
const TOGGLE_FOLLOW_IS_LOAD = 'TOGGLE_FOLLOW_IS_LOAD';

let initial_state = {
    //всего записей пользователей на сервере
    total_users_count: 20,
    //размер одной страницы
    page_size: 6,
    //общее количество страниц
    page_count: 1,
    //текущая страница
    current_page: 1,
    //индикатор загрузки информации о пользователях с сервера
    is_load: false,
    //индикатор загрузки подписки с сервера
    followIsLoad: [],
    //массив пользователей
    users: []
}

const users_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArrayForFollowed(state.users, action.userId, 'id')
            }
        case TOGGLE_IS_LOAD:
            return { ...state, is_load: action.isLoad }

        case TOGGLE_FOLLOW_IS_LOAD:
            if (state.followIsLoad.includes(action.id)) {
                return { ...state, followIsLoad: state.followIsLoad.filter(item => item !== action.id) }
            } else {
                return { ...state, followIsLoad: [...state.followIsLoad, action.id] }
            }

        case SET_USERS:
            return { ...state, users: [...action.users] }

        case SET_TOTAL_COUNT_USERS:
            return { ...state, total_users_count: action.count }

        case SET_CURRENT_PAGE:
            return { ...state, current_page: action.page }

        default:
            return state;
    }
}


export let follow = (userId) => ({ type: FOLLOW, userId })
export let set_users = (users) => ({ type: SET_USERS, users })
export let set_current_page = (page) => ({ type: SET_CURRENT_PAGE, page })
export let set_total_count_users = (count) => ({ type: SET_TOTAL_COUNT_USERS, count })
export let toggle_is_load = (isLoad) => ({ type: TOGGLE_IS_LOAD, isLoad })
export let toggle_follow_is_load = (id) => ({ type: TOGGLE_FOLLOW_IS_LOAD, id })


//##Thunks - users_reducer
export const getUsers = (current_page, page_size) => async dispatch => {
    dispatch(toggle_is_load(true))
    let response = await users_api.getUsers(current_page, page_size)
    dispatch(set_users(response.items))
    dispatch(set_total_count_users(response.totalCount))
    dispatch(toggle_is_load(false))
}

export const changePage = (page, page_size) => async dispatch => {
    dispatch(set_current_page(page))
    dispatch(toggle_is_load(true))
    let response = await users_api.getUsers(page, page_size = 10)
    dispatch(set_users(response.items))
    dispatch(toggle_is_load(false))
}

export const followUser = (followed, id) => async dispatch => {
    if (!followed) {
        dispatch(toggle_follow_is_load(id))
        let response = await follow_api.getFollow(id)
        if (response === 0) {
            dispatch(follow(id))
        }
        dispatch(toggle_follow_is_load(id))
    } else {
        dispatch(toggle_follow_is_load(id))
        let response = await follow_api.deleteFollow(id)
        if (response === 0) {
            dispatch(follow(id))
        }
        dispatch(toggle_follow_is_load(id))
    }
}


export default users_reducer