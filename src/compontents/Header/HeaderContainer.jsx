import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import { add_profile_user, toggle_is_load, logoutThunk } from '../../redux/auth_reducer'

const HeaderApiContainer =(props) => {
        return <Header {...props} />
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.is_auth,
        login: state.auth.login,
        email: state.auth.email,
        id: state.auth.id,
        isLoad: state.auth.is_load,
    }
}


const HeaderContainer = connect(mapStateToProps, {
    add_profile_user, toggle_is_load, logoutThunk
})(HeaderApiContainer)

export default HeaderContainer