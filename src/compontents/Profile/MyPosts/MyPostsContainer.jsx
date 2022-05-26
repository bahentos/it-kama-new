import React from "react";
import { add_post_action_creator, update_new_post_action_creator } from "../../../redux/profile_reducer";
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(add_post_action_creator())
  }

  let onChangePost = (text) => {
    props.dispatch(update_new_post_action_creator(text))
  }
  
  return ( <MyPosts updateNewPostText={onChangePost} addPost={addPost} newPostText={props.newPostText} postsData={props.postsData} /> );
};

export default MyPostsContainer;
