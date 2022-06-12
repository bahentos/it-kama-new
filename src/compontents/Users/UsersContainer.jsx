
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { follow, set_current_page, set_total_count_users, set_users, toggle_follow_is_load, toggle_is_load} from "../../redux/users_reducer";
import Users from "./Users";
import loading from './../../assets/isLoad_5.svg'
import Preloader from "../Common/Preloader/Preloader";
import { users_api } from "../../api/api";

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.toggle_is_load(true)
    users_api.getUsers(this.props.current_page, this.props.page_size).then(response => {
      this.props.set_users(response.items)
      this.props.set_total_count_users(response.totalCount)
      this.props.toggle_is_load(false)
    })
  }

  on_page_change = (p) => {
    this.props.set_current_page(p)
    this.props.toggle_is_load(true)
    users_api.getUsers(p, this.props.page_size).then(response => {
      this.props.set_users(response.items)
      this.props.toggle_is_load(false)
    })
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




const UsersContainer = connect(
  mapStateToProps,
  { follow, set_users, set_current_page, set_total_count_users, toggle_is_load, toggle_follow_is_load }
)(UsersApiComponent);

export default UsersContainer;