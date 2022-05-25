const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogs_reducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            break;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.new_text
            break;

        default:
            break;
    }
    return state
}

export let add_message_action_creator = () => ({type: ADD_MESSAGE})
export let update_new_message_action_creator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, new_text: text})

export default dialogs_reducer