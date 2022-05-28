import React from "react";
import { connect } from "react-redux";
import { add_post_action_creator, update_new_post_action_creator } from "../../../redux/profile_reducer";
import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postsData: state.profilePage.postsData,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(add_post_action_creator())
    },
    updateNewPostText: (text) => {
      dispatch(update_new_post_action_creator(text))
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
