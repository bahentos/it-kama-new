import s from './Profile.module.css'
import ProfileInfo from './ProfilInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Common/Preloader/Preloader';

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  } else {
    return (
      <div className={s.content}>
        <ProfileInfo {...props} />
        <MyPostContainer />
      </div>
    )
  }
}

export default Profile