import { connect } from "react-redux";
import { follow_ac, set_users_ac } from "../../redux/users_reducer";
import Users from "./Users";



let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    isFollow: (userId) => {
      dispatch(follow_ac(userId))
    },
    set_users: (users) => {
      dispatch(set_users_ac(users))
    }
  }
}


const Users_container = connect(mapStateToProps, mapDispatchToProps)(Users);

export default Users_container;