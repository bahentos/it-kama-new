import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfilInfo/ProfileInfo';

const Profile = (props) => {
  
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts 
        dispatch={props.dispatch}
        newPostText={props.state.profilePage.newPostText}
        postsData={props.state.profilePage.postsData} />
    </div>
  );
};

export default Profile