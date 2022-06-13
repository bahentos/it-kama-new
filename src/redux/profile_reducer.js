import { profile_api } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE';

let initial_state = {
    profile: null,

    postsData: [
        { id: 1, post: 'Est et cupidatat minim voluptate eiusmod dolore commodo culpa proident pariatur consectetur.', like_count: 2 },
        { id: 2, post: 'Exercitation et anim minim voluptate ad nisi commodo ipsum commodo ad et elit laboris.', like_count: 5 },
        { id: 3, post: 'Ut velit pariatur ex ex ipsum veniam laboris ipsum tempor ipsum enim velit.', like_count: 7 },
        { id: 4, post: 'Et excepteur do est labore velit deserunt duis.', like_count: 22 },
    ],
    newPostText: ''
}

const profile_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                like_count: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT: 
            return {...state, newPostText: action.new_text}
        
        case SET_PROFILE: 
            return {...state, profile: action.profile}

        default:
            return state;
    }
}


export let add_post= () => ({type: ADD_POST})  
export let update_new_post = (text) => ({type: UPDATE_NEW_POST_TEXT, new_text: text})
export let set_profile = (profile) => ({type: SET_PROFILE, profile})


//##Thunk - profile_reducer
export const getProfileThunk = (id) => {
    return (dispatch) => {
        profile_api.getProfile(id).then(response => {
            set_profile(response)
        })
    }
}

export default profile_reducer