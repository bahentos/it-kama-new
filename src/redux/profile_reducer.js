import { profile_api } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initial_state = {
    profile: null,
    status: '',

    postsData: [
        { id: 1, post: 'Est et cupidatat minim voluptate eiusmod dolore commodo culpa proident pariatur consectetur.', like_count: 2 },
        { id: 2, post: 'Exercitation et anim minim voluptate ad nisi commodo ipsum commodo ad et elit laboris.', like_count: 5 },
        { id: 3, post: 'Ut velit pariatur ex ex ipsum veniam laboris ipsum tempor ipsum enim velit.', like_count: 7 },
        { id: 4, post: 'Et excepteur do est labore velit deserunt duis.', like_count: 22 },
    ],
}

const profile_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: action.post,
                like_count: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        
        case SET_PROFILE: 
            return {...state, profile: action.profile}
        
        case SET_STATUS: 
            return {...state, status: action.status}

        default:
            return state;
    }
}


export let add_post= (post) => ({type: ADD_POST, post})  
export let set_profile = (profile) => ({type: SET_PROFILE, profile})
export let set_status = (status) => ({type: SET_STATUS, status})


//##Thunk - profile_reducer
export const getProfileThunk = (id) => {
    return (dispatch) => {
        profile_api.getProfile(id).then(response => {
            dispatch(set_profile(response))
        })
    }
}

export const getStatusThunk = (id) => {
    return (dispatch) => {
        profile_api.getStatus(id).then(response => {
            dispatch(set_status(response))
        })
    }
}

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profile_api.putStatus(status).then(response => {
            if(response.resultCode === 0) {
                dispatch(set_status(status))
            }
        })
    }
}

export default profile_reducer