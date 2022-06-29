import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  toggle_follow_is_load,
  getUsers, changePage,
  followUser
} from "../../redux/users_reducer";
import Users from "./Users";
import loading from './../../assets/isLoad_5.svg'
import Preloader from "../Common/Preloader/Preloader";
import { compose } from 'redux';
import { getPageSizeSelector, getUsersSelector, getPageCountSelector, getUsersCountSelector, getCurrentPageSelector, getUsersIsLoadSelector, getFollowIsLoadSelector } from '../../redux/users_selectors';

const UsersApiComponent = (props) => {
  useEffect(() => {
    props.getUsers(props.current_page, props.page_size)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.current_page, props.page_size])

  let on_page_change = (p) => {
    props.changePage(p, props.page_size)
  }
  return props.is_load ? <Preloader src={loading} alt={'preloader'} /> : <Users {...props} on_page_change={on_page_change} />

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
  connect(mapStateToProps, { toggle_follow_is_load, getUsers, changePage, followUser })
)(UsersApiComponent)