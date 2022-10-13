const ADD_MESSAGE = 'ADD_MESSAGE';

type DialogType = {id: number, name: string}
type MessageType = {id: number, message: string}
type InitialStateType = {
    dialogsData: DialogType[],
    messagesData: MessageType[],
    newMessageText: string | null
}

let initial_state: InitialStateType = {
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
    newMessageText: null
}


const dialogs_reducer = (state = initial_state, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let newMessage = {
                id: 5,
                message: action.message
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
            
        default:
            return state;
    }
}

type AddMessageType = {
    type: typeof ADD_MESSAGE,
    message: string
}

export const add_message = (message: string): AddMessageType => ({type: ADD_MESSAGE, message})

export default dialogs_reducer