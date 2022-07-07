import React from "react";
import s from './User.module.css'
import icon_user from '../img/userDefaults.svg'
import { NavLink } from "react-router-dom";


const User = ({ user, index, followIsLoad, followUser }) => {
    return (
        <div className={s.user} key={index + '_user'}>
            <div className={s.imgContainer}>
                <NavLink to={'/profile/' + user.id}>
                    <div className={s.img}>
                        <img src={user.photos.small != null ? user.photos.small : icon_user} alt="" />
                    </div>
                </NavLink>
                <button disabled={followIsLoad.includes(user.id)} onClick={() => {
                    followUser(user.followed, user.id)
                }} className={s.follow}>{user.followed ? 'Follow' : 'Unfollow'}</button>
            </div>
            <div className={s.nameContainer}>
                <div className={s.name}>{user.name}</div>
                <div className={s.status}>{user.status}</div>
            </div>
            <div className={s.locationContainer}>
                <div className={s.country}>{'user.location.country'}</div>
                <div className={s.city}>{'user.location.city'}</div>
            </div>
        </div>
    )
}
export default User