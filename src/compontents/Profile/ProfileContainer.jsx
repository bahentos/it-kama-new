import axios from "axios"
import React from "react"
import { connect } from "react-redux"
import { set_profile } from '../../redux/profile_reducer'
import Preloader from "../Common/Preloader/Preloader"
import Profile from "./Profile"


class ProfileApiContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.set_profile(response.data)
        })
    }

    render() {
            return (<Profile {...this.props} />)
        }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

const ProfileContainer = connect(mapStateToProps, { set_profile })(ProfileApiContainer)

export default ProfileContainer