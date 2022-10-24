import { AppStateType } from './redux_store';



export const getMessagesDataSelector = (state: AppStateType) => {
    return state.dialogsPage.messagesData
}

export const getDialogsDataSelector = (state: AppStateType) => {
    return state.dialogsPage.dialogsData
}