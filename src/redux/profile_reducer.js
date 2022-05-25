const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profile_reducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                like_count: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            break;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.new_text
            break;
            
        default:
            break;
    }
    return state
}


export let add_post_action_creator = () => ({type: ADD_POST})  
export let update_new_post_action_creator = (text) => ({type: UPDATE_NEW_POST_TEXT, new_text: text})

export default profile_reducer