
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { follow_ac, set_current_page, set_total_count_users, set_users_ac } from "../../redux/users_reducer";
import Users from "./Users";



class Users_api_component extends React.Component {
  componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.current_page}&count=${this.props.page_size}`).then(response => {
          this.props.set_users(response.data.items)
          this.props.set_total_count_users(response.data.totalCount)
      })
  }

  on_page_change = (p) => {
      this.props.set_current_page(p)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.page_size}`).then(response => {
          this.props.set_users(response.data.items)
      })
  }

  render() {
      return <Users {...this.props} on_page_change={this.on_page_change} />
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
let mapDispatchToProps = (dispatch) => {
  return {
    isFollow: (userId) => {
      dispatch(follow_ac(userId))
    },
    set_users: (users) => {
      dispatch(set_users_ac(users))
    },

    set_current_page: (page) => {
      dispatch(set_current_page(page))
    },
    
    set_total_count_users: (count) => {
      dispatch(set_total_count_users(count))
    }
  }
}


const Users_container = connect(mapStateToProps, mapDispatchToProps)(Users_api_component);

export default Users_container;