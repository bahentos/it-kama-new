import React from "react";
import s from './Users.module.css'
import icon_user from './img/userDefaults.svg'
import { NavLink } from "react-router-dom";
import { follow_api } from "../../api/api";


const Users = (props) => {
    let pages_count = Math.ceil(props.total_users_count / props.page_size)

    let pages = []
    for (let i = 1; i <= pages_count; i++) {
        pages.push(i)
    }

    let users_div = props.users.map((user, index) => {
        return (
            <div className={s.user} key={index + '_user'}>
                <div className={s.imgContainer}>
                    <NavLink to={'/profile/' + user.id}>
                        <div className={s.img}>
                            <img src={user.photos.small != null ? user.photos.small : icon_user} alt="" />
                        </div>
                    </NavLink>
                    <button disabled={props.followIsLoad.includes(user.id)} onClick={() => {
                        if (!user.followed) {
                            props.toggle_follow_is_load(user.id)
                            follow_api.getFollow(user.id).then(response => {
                                if (response === 0) {
                                    props.follow(user.id)
                                }
                                props.toggle_follow_is_load(user.id)
                            })
                        } else {
                            props.toggle_follow_is_load(user.id)
                            follow_api.deleteFollow(user.id).then(response => {
                                if (response === 0) {
                                    props.follow(user.id)
                                }
                                props.toggle_follow_is_load(user.id)
                            })
                        }
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
    })
    return (
        <div className={s.fon}>

            <div className={s.container}>
                <div className={s.pageNumberContainer}>
                    {pages.map((p, index) => {
                        return <div
                            key={`pages_${index}`}
                            className={props.current_page === p ? s.pageNumber + ' ' + s.selectedPage : s.pageNumber}
                            onClick={(e) => props.on_page_change(p)}
                        >{p}</div>
                    })}
                </div>
                {users_div}
            </div>
        </div>
    )
}
export default Users