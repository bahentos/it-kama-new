import s from './ProfileInfo.module.css'
import ProfileStatusHook from './ProfileStatus/ProfileStatusHook'
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileInfoBlock from './ProfileInfoBlock/ProfileInfoBlock'
import ProfileUpdateForm from './ProfileInfoForm/ProfileInfoForm';
import { useState } from 'react';
import { reset } from "redux-form";

const ProfileInfo = (props) => {
  const [isEdit, setIsEdit] = useState(false)
  let setEdit = () => {
    setIsEdit(!isEdit)
  }

  let onSubmitProfile = (formData, dispatch) => {
    props.saveProfile(formData, props.auth_id)
    dispatch(reset('profile_update_form'))
  }

  return (
    <div className={s.content}>
      {/* Шапка */}
      {/* <div className={s.image}>
        <img className={s.fon} src={sea} alt='sea' />
      </div> */}
      {/* Аватар и имя */}
      <ProfileAvatar
        small={props.profile.photos.small}
        isOwner={props.isOwner}
        fullName={props.profile.fullName}
      />
      {/* Статус */}
      <div className={s.status}>
        <ProfileStatusHook {...props} />
      </div>
      {!isEdit ?
        <ProfileInfoBlock
          setEdit={setEdit}
          isOwner={props.isOwner}
          aboutMe={props.profile.aboutMe}
          lookingForAJob={props.profile.lookingForAJob}
          lookingForAJobDescription={props.profile.lookingForAJobDescription}
          contacts={props.profile.contacts} /> :
        <ProfileUpdateForm
          onSubmit={onSubmitProfile}
          fullName={props.profile.fullName}
          setEdit={setEdit}
          savePhoto={props.savePhoto}
          isOwner={props.isOwner}
        />}
    </div>
  );
};

export default ProfileInfo