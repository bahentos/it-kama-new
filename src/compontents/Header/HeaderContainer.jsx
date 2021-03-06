import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import { add_profile_user, toggle_is_load, logoutThunk } from '../../redux/auth_reducer'
import { getAuthEmailSelector, getAuthIsLoadSelector, getAuthLoginSelector, getAuthUserIdSelector, getIsAuthSelector } from "../../redux/auth_selectos"

const HeaderApiContainer =(props) => {
        return <Header {...props} />
}

let mapStateToProps = (state) => {
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