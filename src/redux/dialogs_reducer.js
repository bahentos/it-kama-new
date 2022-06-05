const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initial_state = {
    dialogsData: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Anny' },
        { id: 3, name: 'Stieven' },
        { id: 4, name: 'Tony' },
        { id: 5, name: 'Larry' }
    ],
    messagesData: [
        { id: 1, message: 'Do esse exercitation aliqua ea ullamco est anim do nostrud magna tempor.' },
        { id: 2, message: 'Nulla ea eiusmod magna anim ex commodo ullamco duis nulla anim cupidatat do eiusmod ut.' },
        { id: 3, message: 'Ea ea nisi voluptate deserunt Lorem proident.' },
        { id: 4, message: 'Lorem fugiat exercitation in magna et laboris cillum amet enim excepteur irure ullamco.' },
        { id: 5, message: 'Labore Lorem et veniam est.' }
    ],
    newMessageText: '',
}

const dialogs_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.new_text}
            
        default:
            return state;
    }
}

export let add_message = () => ({type: ADD_MESSAGE})
export let update_new_message = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, new_text: text})

export default dialogs_reducer