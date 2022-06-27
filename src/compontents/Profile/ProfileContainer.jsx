import React from "react"
import { connect } from "react-redux"
import { getProfileThunk, getStatusThunk, updateStatusThunk } from '../../redux/profile_reducer'
import Profile from "./Profile"
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Login from "../Login/Login"

let Get_user_id = (props) => {
    const params = useParams();
    return <ProfileApiContainer {...props} id={params.id} />
}

class ProfileApiContainer extends React.Component {
    componentDidMount() {
        if (this.props.id) {
            this.props.getProfileThunk(this.props.id)
            this.props.getStatusThunk(this.props.id)
        } else if (this.props.auth_id) {
            this.props.getProfileThunk(this.props.auth_id)
            this.props.getStatusThunk(this.props.auth_id)
        }
    }

    render() {
        return this.props.id || this.props.auth_id ? <Profile {...this.props} /> :
        <Login />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        auth_id: state.auth.id
    }
}


export default compose(
    connect(mapStateToProps, { getProfileThunk, getStatusThunk, updateStatusThunk }),
)(Get_user_id)