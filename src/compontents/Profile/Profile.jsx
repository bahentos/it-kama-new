import s from './Profile.module.css'
import sea from '../../assets/sea_2.jpg'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfilInfo/ProfileInfo';

const Profile = (props) => {
  
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts addPost={props.addPost}  postsData={props.postsData} />
    </div>
  );
};

export default Profile