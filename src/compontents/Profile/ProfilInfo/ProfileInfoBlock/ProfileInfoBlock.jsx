import s from './ProfileInfoBlock.module.css'
import facebook from './img/facebook_icon.svg'
import vk from './img/vk_icon.svg'
import twitter from './img/twitter_icon.svg'
import instagram from './img/instagram_icon.svg'
import github from './img/github_icon.svg'
import youtube from './img/youtube_icon.svg'
import maillink from './img/maillink_icon.svg'
import www from './img/www_icon.svg'
import { Button } from '@mui/material'

const ProfileInfoBlock = ({ aboutMe, lookingForAJob, lookingForAJobDescription, contacts, isOwner, setEdit }) => {
  return (
    <div>
      <div className={s.aboutText}>
        {isOwner && <div className={s.editButton}><Button sx={{fontSize: '0.8em'}} onClick={setEdit} variant="contained">Редактировать профиль</Button></div>}
        {!!aboutMe && <div className={s.aboutMe}  ><label className={s.labels}>Обо мне: </label>{aboutMe}</div>}
        {!!lookingForAJob && <div className={s.jobMessage}><label className={s.labels}>Ищу работу</label></div>}
        {!!lookingForAJob && <><label className={s.labels}>Навыки: </label><div className={s.jobMessage}>{lookingForAJobDescription}</div></>}
      </div>
      <div className={s.socials}>
        {!!contacts.facebook && <a href={contacts.facebook} className={s.item}><img src={facebook} alt="" /></a>}
        {!!contacts.vk && <a href={contacts.vk} className={s.item}><img src={vk} alt="" /></a>}
        {!!contacts.instagram && <a href={contacts.instagram} className={s.item}><img src={instagram} alt="" /></a>}
        {!!contacts.twitter && <a href={contacts.twitter} className={s.item}><img src={twitter} alt="" /></a>}
        {!!contacts.github && <a href={contacts.github} className={s.item}><img src={github} alt="" /></a>}
        {!!contacts.youtube && <a href={contacts.youtube} className={s.item}><img src={youtube} alt="" /></a>}
        {!!contacts.contacts && <a href={contacts} className={s.item}><img src={maillink} alt="" /></a>}
        {!!contacts.website && <a href={contacts.website} className={s.item}><img src={www} alt="" /></a>}
      </div>
    </div>
  );
};

export default ProfileInfoBlock