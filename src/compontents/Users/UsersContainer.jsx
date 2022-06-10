
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { follow, set_current_page, set_total_count_users, set_users } from "../../redux/users_reducer";
import { toggle_is_load } from "../../redux/auth_reducer";
import Users from "./Users";
import loading from './../../assets/isLoad_5.svg'
import Preloader from "../Common/Preloader/Preloader";


class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.toggle_is_load(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.current_page}&count=${this.props.page_size}`).then(response => {
      this.props.set_users(response.data.items)
      this.props.set_total_count_users(response.data.totalCount)
      this.props.toggle_is_load(false)
    })
  }

  on_page_change = (p) => {
    this.props.set_current_page(p)
    this.props.toggle_is_load(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.page_size}`).then(response => {
      this.props.set_users(response.data.items)
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
    is_load: state.usersPage.is_load
  }
}




const UsersContainer = connect(
  mapStateToProps,
  { follow, set_users, set_current_page, set_total_count_users, toggle_is_load }
)(UsersApiComponent);

export default UsersContainer;