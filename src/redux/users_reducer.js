const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

let initial_state = {
    total_users_count: 20,
    page_size: 6,
    page_count: 1,
    current_page: 1,
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
            return {...state, users: [ ...state.users, ...action.users]}
        default:
            return state;
    }
}


export let follow_ac = (userId) => ({type: FOLLOW, userId})  
export let set_users_ac = (users) => ({type: SET_USERS, users})  

export default users_reducer