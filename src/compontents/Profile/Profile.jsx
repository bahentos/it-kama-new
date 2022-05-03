import s from './Profile.module.css'
import sea from '../../assets/sea_2.jpg'

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.image}>
        <img src={sea} />
      </div>
      <div>Avatar + description</div>
      <div>
        My posts
        <div>New Post</div>
        <div className={s.posts}>
          <div className={s.item}>Post1</div>
          <div className={s.item}>Post2</div>
          <div className={s.item}>Post3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile