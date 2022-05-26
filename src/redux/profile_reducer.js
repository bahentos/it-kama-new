const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initial_state = {
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