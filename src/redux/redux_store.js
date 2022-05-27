import { combineReducers, createStore } from "redux";
import dialogs_reducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
import sidebar_reducer from "./sidebar_reducer";

let redusers = combineReducers({
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    sidebarPage: sidebar_reducer
})


let store = createStore(redusers);


export default store;

window.state = store.getState();