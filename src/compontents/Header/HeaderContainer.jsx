import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import { add_profile_user, toggle_is_load } from '../../redux/auth_reducer'
import axios from "axios"

class HeaderApiContainer extends React.Component {
    componentDidMount() {
        this.props.toggle_is_load(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.add_profile_user(response.data.data)
                this.props.toggle_is_load(false)
            }
        })
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


const HeaderContainer = connect(mapStateToProps, { add_profile_user, toggle_is_load })(HeaderApiContainer)

export default HeaderContainer