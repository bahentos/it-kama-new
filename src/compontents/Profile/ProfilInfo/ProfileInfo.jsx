import s from './ProfileInfo.module.css'
import facebook from './img/facebook_icon.svg'
import vk from './img/vk_icon.svg'
import twitter from './img/twitter_icon.svg'
import instagram from './img/instagram_icon.svg'
import github from './img/github_icon.svg'
import youtube from './img/youtube_icon.svg'
import maillink from './img/maillink_icon.svg'
import www from './img/www_icon.svg'
import ProfileStatusHook from './ProfileStatus/ProfileStatusHook'
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';

const ProfileInfo = (props) => {
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
      savePhoto={props.savePhoto} />
      {/* Статус */}
      <div className={s.aboutText} >
        <ProfileStatusHook {...props} />
        {props.profile.aboutMe && <div className={s.aboutMe}  >{props.profile.aboutMe}</div>}
        {props.profile.lookingForAJob && <div className={s.jobMessage}>{props.profile.lookingForAJobDescription}</div>}
      </div>
      <div className={s.socials}>
        {props.profile.contacts.facebook != null ? <a href={props.profile.contacts.facebook} className={s.item}><img src={facebook} alt="" /></a> : null}
        {props.profile.contacts.vk != null ? <a href={props.profile.contacts.vk} className={s.item}><img src={vk} alt="" /></a> : null}
        {props.profile.contacts.twitter != null ? <a href={props.profile.contacts.twitter} className={s.item}><img src={twitter} alt="" /></a> : null}
        {props.profile.contacts.instagram != null ? <a href={props.profile.contacts.instagram} className={s.item}><img src={instagram} alt="" /></a> : null}
        {props.profile.contacts.github != null ? <a href={props.profile.contacts.github} className={s.item}><img src={github} alt="" /></a> : null}
        {props.profile.contacts.youtube != null ? <a href={props.profile.contacts.youtube} className={s.item}><img src={youtube} alt="" /></a> : null}
        {props.profile.contacts.contacts != null ? <a href={props.profile.contacts} className={s.item}><img src={maillink} alt="" /></a> : null}
        {props.profile.contacts.website != null ? <a href={props.profile.contacts.website} className={s.item}><img src={www} alt="" /></a> : null}
      </div>
    </div>
  );
};

export default ProfileInfo