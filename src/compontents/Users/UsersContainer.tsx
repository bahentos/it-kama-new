import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  toggle_follow_is_load,
  getUsers,
  changePage,
  followUser,
} from "../../redux/users_reducer";
import Users from "./Users";
import loading from "./../../assets/isLoad_5.svg";
import Preloader from "../Common/Preloader/Preloader";
import {
  getPageSizeSelector,
  getUsersSelector,
  getPageCountSelector,
  getUsersCountSelector,
  getCurrentPageSelector,
  getUsersIsLoadSelector,
  getFollowIsLoadSelector,
} from "../../redux/users_selectors";
import { AppStateType } from "../../redux/redux_store";
import { UsersType } from "../../types/types";
import { compose } from "@typed/compose";

type PropsUsersApiType = {
  users: UsersType;
  page_size: number;
  page_count: number;
  total_users_count: number;
  current_page: number;
  is_load: boolean;
  followIsLoad: boolean;
  pageTitle: string;
  toggle_follow_is_load: (id: number) => void;
  getUsers: (current_page: number, page_size: number) => void;
  changePage: (page: number, page_size: number) => void;
  followUser: (followed: boolean, id: number) => void;
};

const UsersApiComponent: React.FC<PropsUsersApiType> = (
  props: PropsUsersApiType
) => {
  useEffect(() => {
    props.getUsers(props.current_page, props.page_size);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.current_page, props.page_size]);

  let on_page_change = (p: number) => {
    props.changePage(p, props.page_size);
  };
  return (
    <>
      {props.is_load ? (
        <Preloader src={loading} alt={"preloader"} />
      ) : (
        <Users {...props} on_page_change={on_page_change} />
      )}
    </>
  );
};

let mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsersSelector(state),
    page_size: getPageSizeSelector(state),
    page_count: getPageCountSelector(state),
    total_users_count: getUsersCountSelector(state),
    current_page: getCurrentPageSelector(state),
    is_load: getUsersIsLoadSelector(state),
    followIsLoad: getFollowIsLoadSelector(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    toggle_follow_is_load,
    getUsers,
    changePage,
    followUser,
  })
)(UsersApiComponent);
