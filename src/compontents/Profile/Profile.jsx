import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfilInfo/ProfileInfo';

const Profile = (props) => {
  
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts 
        addPost={props.addPost} 
        newPostText={props.state.profilePage.newPostText}
        update_new_post_text={props.update_new_post_text} 
        postsData={props.state.profilePage.postsData} />
    </div>
  );
};

export default Profile