import * as axios from 'axios'
import s from './Users.module.css'
import icon_user from './img/userDefaults.svg'

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.set_users(response.data.items)
            })
        }
    }
    
    let users_divs = props.users.map((user, index) => {
        let follow = (userId) => {
            props.isFollow(userId)
        }
        return (
            <div className={s.user} key={index + '_user'}>
                <div className={s.imgContainer}>
                    <div className={s.img}>
                        <img src={user.photos.small != null? user.photos.small : icon_user} alt="" />
                    </div>
                    <button onClick={() => { props.isFollow(user.id) }} className={s.follow}>{user.followed ? 'Follow' : 'Unfollow'}</button>
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
                     <button onClick={getUsers}>Get Users</button>
            <div className={s.container}>
                {users_divs}
            </div>
        </div>
    )
}

export default Users