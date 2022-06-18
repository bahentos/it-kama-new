
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  toggle_follow_is_load,
  getUsers, changePage,
  followUser
} from "../../redux/users_reducer";
import Users from "./Users";
import loading from './../../assets/isLoad_5.svg'
import Preloader from "../Common/Preloader/Preloader";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.current_page, this.props.page_size)
  }

  on_page_change = (p) => {
    this.props.changePage(p, this.props.page_size)
  }

  render() {
    return this.props.is_load ? <Preloader src={loading} alt={'preloader'} /> : <Users {...this.props} on_page_change={this.on_page_change} />
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    page_size: state.usersPage.page_size,
    page_count: state.usersPage.page_count,
    total_users_count: state.usersPage.total_users_count,
    current_page: state.usersPage.current_page,
    is_load: state.usersPage.is_load,
    followIsLoad: state.usersPage.followIsLoad
  }
}


let AuthRedirect = withAuthRedirect(UsersApiComponent)

const UsersContainer = connect(
  mapStateToProps,
  {
    toggle_follow_is_load, getUsers,
    changePage, followUser
  }
)(AuthRedirect);

export default UsersContainer;