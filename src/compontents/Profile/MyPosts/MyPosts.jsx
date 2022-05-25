import React from "react";
import { add_post_action_creator, update_new_post_action_creator } from "../../../redux/profile_reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef()
  
  let postsElement = props.postsData.map( (post, index) => <Post like_count={post.like_count} key={index + '_postData'} message={post.post} />)

  let addPost = () => {
    props.dispatch(add_post_action_creator())
  }

  let onChangePost = () => {
    props.dispatch(update_new_post_action_creator(newPostElement.current.value))
  }

  return (
    <div className={s.container}>
      My posts
      <div className={s.addtextContainer}>
        <div className={s.containerTextarea}>
          <textarea 
          ref={newPostElement}
          onChange={onChangePost}
          value={props.newPostText}
          ></textarea>
        </div>
        <button onClick={addPost} className={s.btn}>Add post</button>
      </div >
      <div className={s.messageContainer}>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
