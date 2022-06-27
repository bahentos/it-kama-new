
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
import { compose } from 'redux';
import { getPageSizeSelector, getUsersSelector, getPageCountSelector, getUsersCountSelector, getCurrentPageSelector, getUsersIsLoadSelector, getFollowIsLoadSelector } from '../../redux/users_selectors';

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
    users: getUsersSelector(state),
    page_size: getPageSizeSelector(state),
    page_count: getPageCountSelector(state),
    total_users_count: getUsersCountSelector(state),
    current_page: getCurrentPageSelector(state),
    is_load: getUsersIsLoadSelector(state),
    followIsLoad: getFollowIsLoadSelector(state)
  }
}


export default compose(
  connect(mapStateToProps,{toggle_follow_is_load, getUsers, changePage, followUser})
  )(UsersApiComponent)