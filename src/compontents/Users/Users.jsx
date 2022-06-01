import React from "react";
import axios from "axios";
import s from './Users.module.css'
import icon_user from './img/userDefaults.svg'



class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.current_page}&count=${this.props.page_size}`).then(response => {
            this.props.set_users(response.data.items)
        })
    }

    render() {
        let pages_count = Math.ceil(this.props.total_users_count / this.props.page_size)

        let pages = []
        for (let i = 1; i <= pages_count; i++) {
            pages.push(i) 
        }

        let users_div = this.props.users.map((user, index) => {
            return (
                <div className={s.user} key={index + '_user'}>
                    <div className={s.imgContainer}>
                        <div className={s.img}>
                            <img src={user.photos.small != null ? user.photos.small : icon_user} alt="" />
                        </div>
                        <button onClick={() => { this.props.isFollow(user.id) }} className={s.follow}>{user.followed ? 'Follow' : 'Unfollow'}</button>
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
                <div>
                    {pages.map((p, index) => {
                       return <span 
                                className={this.props.current_page === p && s.selectedPage }
                                onClick={() => this.props.set_current_page(p)}
                            >{p}</span>
                    })}
                </div>
                    {users_div}
                </div>
            </div>
        )
    }
}

export default Users