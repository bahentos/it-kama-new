import s from './ProfileAvatar.module.css'
import userPic from '../../../../assets/userDefaults.svg'

const ProfileAvatar = ({small, isOwner, fullName}) => {

  return (
    <div className={s.containerAvatar}>
      <div className={s.containerImage}>
        {!small ?
          <img className={s.avatar} src={userPic} alt="avatar" />
          : <img className={s.avatar} src={small} alt="avatar" />}
      </div>
      <div className={s.name}>{fullName}</div>
    </div>
  );
};

export default ProfileAvatar