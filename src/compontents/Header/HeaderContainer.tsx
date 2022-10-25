import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import { add_profile_user, toggle_is_load, logoutThunk } from '../../redux/auth_reducer'
import { getAuthEmailSelector, getAuthIsLoadSelector, getAuthLoginSelector, getAuthUserIdSelector, getIsAuthSelector } from "../../redux/auth_selectos"
import { AppStateType } from "../../redux/redux_store"

export type PropsHeaderType = {
    isAuth: boolean,
    login: string,
    email: string,
    id: number,
    isLoad: boolean,

    add_profile_user: (data: object, is_auth: boolean) => void,
    toggle_is_load: (isLoad: boolean) => void,
    logoutThunk: () => void,
}


const HeaderApiContainer: React.FC<PropsHeaderType> =(props) => {
        return <Header {...props} />
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: getIsAuthSelector(state),
        login: getAuthLoginSelector(state),
        email: getAuthEmailSelector(state),
        id: getAuthUserIdSelector(state),
        isLoad: getAuthIsLoadSelector(state),
    }
}


const HeaderContainer = connect(mapStateToProps, {
    add_profile_user, toggle_is_load, logoutThunk
})(HeaderApiContainer)

export default HeaderContainer