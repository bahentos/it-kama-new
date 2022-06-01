import { connect } from "react-redux";
import { follow_ac, set_current_page, set_users_ac } from "../../redux/users_reducer";
import Users from "./Users";



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
    }
  }
}


const Users_container = connect(mapStateToProps, mapDispatchToProps)(Users);

export default Users_container;