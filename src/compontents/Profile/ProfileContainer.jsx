import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getProfileThunk, getStatusThunk, updateStatusThunk, savePhoto} from '../../redux/profile_reducer'
import Profile from "./Profile"
import { useParams } from 'react-router-dom'
import { compose } from 'redux';
import Login from "../Login/Login"
import { getProfileSelector, getProfileStatusSelector } from '../../redux/profile_selectors';
import { getAuthUserIdSelector } from "../../redux/auth_selectos"

let Get_user_id = (props) => {
    const params = useParams();
    let isOwner = !params.id
    return <ProfileApiContainer
        {...props}
        isOwner={isOwner}
        id={isOwner ? props.auth_id : params.id} />
}

const ProfileApiContainer = (props) => {
    useEffect(() => {
        if (props.id) {
            props.getProfileThunk(props.id)
            props.getStatusThunk(props.id)
        } else if (props.auth_id) {
            props.getProfileThunk(props.auth_id)
            props.getStatusThunk(props.auth_id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.id, props.auth_id])


    return props.id || props.auth_id ? <Profile {...props} /> : <Login />
}

let mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        status: getProfileStatusSelector(state),
        auth_id: getAuthUserIdSelector(state)
    }
}


export default compose(
    connect(mapStateToProps, { getProfileThunk, getStatusThunk, updateStatusThunk, savePhoto }),
)(Get_user_id)