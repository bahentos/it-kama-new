import React from "react"
import { connect } from "react-redux"
import { getProfileThunk } from '../../redux/profile_reducer'
import Profile from "./Profile"
import { Navigate, useParams } from 'react-router-dom'

let Get_user_id = (props) => {
    const params = useParams();
    return <ProfileApiContainer {...props} id={params.id} />
}
class ProfileApiContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileThunk(this.props.id)
    }

    render() {
        return (
            <>
                <Profile {...this.props} />
                {!this.props.is_auth && <Navigate to='/login' />}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        is_auth: state.auth.is_auth
    }
}


const ProfileContainer = connect(mapStateToProps, { getProfileThunk })(Get_user_id)

export default ProfileContainer