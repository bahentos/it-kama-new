import React from "react";
import { connect } from "react-redux";
import { add_post, update_new_post } from "../../../redux/profile_reducer";
import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postsData: state.profilePage.postsData,
  }
}


const MyPostsContainer = connect(mapStateToProps, {add_post, update_new_post})(MyPosts);


export default MyPostsContainer;
