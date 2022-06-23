import { connect } from "react-redux";
import { add_post } from "../../../redux/profile_reducer";
import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  }
}


const MyPostsContainer = connect(mapStateToProps, {add_post})(MyPosts);


export default MyPostsContainer;
