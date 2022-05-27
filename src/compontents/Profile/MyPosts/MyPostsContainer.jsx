import React from "react";
import { add_post_action_creator, update_new_post_action_creator } from "../../../redux/profile_reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer >
      {(store) => {
        let state = store.getState()
        let addPost = () => {
          store.dispatch(add_post_action_creator())
        }
      
        let onChangePost = (text) => {
          store.dispatch(update_new_post_action_creator(text))
        }
        return <MyPosts updateNewPostText={onChangePost} addPost={addPost} newPostText={state.profilePage.newPostText} postsData={state.profilePage.postsData} />
      }
      }
    </StoreContext.Consumer>
  )
};

export default MyPostsContainer;
