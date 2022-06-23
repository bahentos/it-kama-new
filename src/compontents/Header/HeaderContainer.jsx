import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import { add_profile_user, toggle_is_load, getAuthThunk } from '../../redux/auth_reducer'

class HeaderApiContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthThunk()
    }
    render() {
        return <Header {...this.props} />
    }
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
    add_profile_user, toggle_is_load, getAuthThunk
})(HeaderApiContainer)

export default HeaderContainer