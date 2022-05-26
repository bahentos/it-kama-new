import s from './Profile.module.css'
import ProfileInfo from './ProfilInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostContainer
        dispatch={props.dispatch}
        newPostText={props.state.profilePage.newPostText}
        postsData={props.state.profilePage.postsData} />
    </div>
  );
};

export default Profile