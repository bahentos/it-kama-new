import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

//Какой-то комментарий

const MyPosts = (props) => {
  let newPostElement = React.createRef()
  
  let postsElement = props.postsData.map( (post, index) => <Post like_count={post.like_count} key={index + '_postData'} message={post.post} />)

  let addPost = ( ) => {
    debugger
    let text = newPostElement.current.value
    props.addPost(text)
  }


  return (
    <div className={s.container}>
      My posts
      <div className={s.addtextContainer}>
        <div className={s.containerTextarea}>
          <textarea ref={newPostElement} ></textarea>
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
