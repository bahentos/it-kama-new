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
                is_auth: true
            }
        case TOGGLE_IS_LOAD:
            return {...state, is_load: action.isLoad}

        default:
            return state;
    }
}

export let add_profile_user = (data) => ({ type: ADD_PROFILE_USER, data })
export let toggle_is_load = (isLoad) => ({type: TOGGLE_IS_LOAD, isLoad})  

export default auth_reducer