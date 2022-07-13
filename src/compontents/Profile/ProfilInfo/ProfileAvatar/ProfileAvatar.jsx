import s from './ProfileAvatar.module.css'
import userPic from '../../../../assets/userDefaults.svg'

const ProfileAvatar = ({small, isOwner, fullName, savePhoto}) => {
  let onChangeHandler = (e) => {
    if(e.target.files.length){
      savePhoto(e.target.files[0])
    }
  }
  return (
    <div className={s.containerAvatar}>
      <div className={s.containerImage}>
        {!small ?
          <img className={s.avatar} src={userPic} alt="avatar" />
          : <img className={s.avatar} src={small} alt="avatar" />}
        {isOwner && <input type="file" onChange={onChangeHandler} />}
      </div>
      <div className={s.name}>{fullName}</div>
    </div>
  );
};

export default ProfileAvatar