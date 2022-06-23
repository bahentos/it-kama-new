import React from "react";
import { reset } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import ProfilePostForm from "./ProfilePostForm/ProfilePostForm";

const MyPosts = (props) => {

  let postsElement = props.postsData.map((post, index) => {
    return (
      <Post
        like_count={post.like_count}
        key={index + '_postData'}
        message={post.post} />
    )
  })


  let onSubmitPost = (formData, dispatch) => {
    props.add_post(formData.profile_post)
    dispatch(reset('profile_post'))
  }

  return (
    <div className={s.container}>
      My posts
      <ProfilePostForm onSubmit={onSubmitPost} />
      <div className={s.messageContainer}>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
