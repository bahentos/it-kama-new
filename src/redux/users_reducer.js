const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';

let initial_state = {
    //всего записей пользователей на сервере
    total_users_count: 20,
    //размер одной страницы
    page_size: 6,
    //общее количество страниц
    page_count: 1,
    //текущая страница
    current_page: 1,
    //индикатор загрузки информации с сервера
    is_load: false,
    users: []
}

const users_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        if(u.followed){
                            return {...u, followed: false}
                        } else {
                            return {...u, followed: true}
                        }
                    }
                    return u
                })
            }

        case SET_USERS:
            return {...state, users: [ ...action.users]}
        
        case SET_TOTAL_COUNT_USERS:
            return {...state, total_users_count: action.count}
        
        case SET_CURRENT_PAGE:
            return {...state, current_page: action.page}
        default:
            return state;
    }
}


export let follow_ac = (userId) => ({type: FOLLOW, userId})  
export let set_users_ac = (users) => ({type: SET_USERS, users})  
export let set_current_page = (page) => ({type: SET_CURRENT_PAGE, page})  
export let set_total_count_users = (count) => ({type: SET_TOTAL_COUNT_USERS, count})  

export default users_reducer