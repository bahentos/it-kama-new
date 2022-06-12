import React from "react"
import { connect } from "react-redux"
import { set_profile } from '../../redux/profile_reducer'
import Profile from "./Profile"
import { useParams } from 'react-router-dom'
import { profile_api } from "../../api/api"

let Get_user_id = (props) => {
    const params = useParams();
    return <ProfileApiContainer {...props} id={params.id} />
}
class ProfileApiContainer extends React.Component {
    componentDidMount() {
        profile_api.getProfile(this.props.id).then(response => {
            this.props.set_profile(response)
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


const ProfileContainer = connect(mapStateToProps, { set_profile })(Get_user_id)

export default ProfileContainer