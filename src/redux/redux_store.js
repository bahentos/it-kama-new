import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import auth_reducer from "./auth_reducer";
import dialogs_reducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
import sidebar_reducer from "./sidebar_reducer";
import users_reducer from "./users_reducer";
import { reducer as formReducer } from 'redux-form'

let redusers = combineReducers({
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    sidebarPage: sidebar_reducer,
    auth: auth_reducer,
    usersPage: users_reducer,
    form: formReducer
})


let store = createStore(redusers, applyMiddleware(thunk));


export default store;

window.store = store