import s from './Profile.module.css'
import sea from '../../assets/sea_2.jpg'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfilInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile