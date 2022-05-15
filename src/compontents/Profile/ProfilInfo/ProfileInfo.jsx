import s from './ProfileInfo.module.css'
import sea from '../../../assets/sea_2.jpg'
import userPic from '../../../assets/userDefaults.svg'

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div className={s.image}>
        <img className={s.fon} src={sea} alt='sea' />
      </div>
      <div className={s.containerAvatar}>
        <img className={s.avatar} src={userPic} alt="avatar" />
        <div className={s.name}>Вася Пупкин</div>
      </div>
    </div>
  );
};

export default ProfileInfo