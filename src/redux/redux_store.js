import { combineReducers, createStore } from "redux";
import dialogs_reducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
import sidebar_reducer from "./sidebar_reducer";
import users_reducer from "./users_reducer";

let redusers = combineReducers({
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    sidebarPage: sidebar_reducer,
    usersPage: users_reducer,
})


let store = createStore(redusers);


export default store;

window.store = store