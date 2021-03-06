import { profile_api } from "../api/api";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_PHOTO = 'UPDATE_PHOTO';

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

        case DELETE_POST:
            return { ...state, postsData: state.postsData.filter(p => p !== action.postId) }

        case SET_PROFILE:
            return { ...state, profile: action.profile }

        case SET_STATUS:
            return { ...state, status: action.status }
        
        case UPDATE_PHOTO:
            return { ...state,
                profile: {
                    ...state.profile,
                    photos: {
                        small: action.small,
                        large: action.large
                    }
                }
             }

        default:
            return state;
    }
}


export let add_post = (post) => ({ type: ADD_POST, post })
export let delete_post = (postId) => ({ type: DELETE_POST, postId })
export let set_profile = (profile) => ({ type: SET_PROFILE, profile })
export let set_status = (status) => ({ type: SET_STATUS, status })
export let save_photo_success = (small, large) => ({ type: UPDATE_PHOTO, small, large})


//##Thunk - profile_reducer
export const getProfileThunk = (id) => async dispatch => {
    let response = await profile_api.getProfile(id)
    dispatch(set_profile(response))
}


export const getStatusThunk = (id) => {
    return (dispatch) => {
        profile_api.getStatus(id).then(response => {
            dispatch(set_status(response))
        })
    }
}

export const updateStatusThunk = (status) => async dispatch => {
    let response = await profile_api.putStatus(status)
    if (response.resultCode === 0) {
        dispatch(set_status(status))
    }
}

export const savePhoto = (file) => async dispatch => {
    let response = await profile_api.putPhoto(file)
    if (response.resultCode === 0) {
        let {small, large} = response.data.photos
        dispatch(save_photo_success(small, large))
    }
}

export const saveProfile = (formData, id) => async dispatch => {
    let response = await profile_api.saveProfile(formData)
    if (response.resultCode === 0) {
        getProfileThunk(id)
    }
}

export default profile_reducer
