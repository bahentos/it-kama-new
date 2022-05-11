import s from './Profile.module.css'
import sea from '../../assets/sea_2.jpg'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.image}>
        <img src={sea} alt='sea'/>
      </div>
      <div>Avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile