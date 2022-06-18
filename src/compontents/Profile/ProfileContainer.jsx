import React from "react"
import { connect } from "react-redux"
import { getProfileThunk } from '../../redux/profile_reducer'
import Profile from "./Profile"
import { Navigate, useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let Get_user_id = (props) => {
    const params = useParams();
    return <ProfileApiContainer {...props} id={params.id} />
}

class ProfileApiContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileThunk(this.props.id)
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let AuthRedirect = withAuthRedirect(Get_user_id)

const ProfileContainer = connect(mapStateToProps, { getProfileThunk })(AuthRedirect)

export default ProfileContainer