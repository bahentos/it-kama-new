import { connect } from "react-redux";
import { add_post } from "../../../redux/profile_reducer";
import { getPostsDataSelector } from "../../../redux/profile_selectors";
import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
  return {
    postsData: getPostsDataSelector(state),
  }
}


const MyPostsContainer = connect(mapStateToProps, {add_post})(MyPosts);


export default MyPostsContainer;
