import s from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        debugger
        props.set_users(
            [
                { id: 1, url: 'https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png', followed: true, fullName: 'Dmitry', status: 'Id amet culpa amet nostrud.', location: { city: 'Minsk', country: 'Belarus' } },
                { id: 2, url: 'https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png', followed: false, fullName: 'Alex', status: 'Ad aute anim voluptate proident duis nisi.', location: { city: 'Moscow', country: 'Russia' } },
                { id: 3, url: 'https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png', followed: true, fullName: 'Vano', status: 'Reprehenderit pariatur adipisicing in duis.', location: { city: 'Tbilisy', country: 'Georgia' } },
            ]
        )
    }
    let users_divs = props.users.map((user, index) => {
        let follow = (userId) => {
            props.isFollow(userId)
        }
        return (
            <div className={s.user} key={index + '_user'}>
                <div className={s.imgContainer}>
                    <div className={s.img}>
                        <img src={user.url} alt="" />
                    </div>
                    <button onClick={() => { props.isFollow(user.id) }} className={s.follow}>{user.followed ? 'Follow' : 'Unfollow'}</button>
                </div>
                <div className={s.nameContainer}>
                    <div className={s.name}>{user.fullName}</div>
                    <div className={s.status}>{user.status}</div>
                </div>
                <div className={s.locationContainer}>
                    <div className={s.country}>{user.location.country}</div>
                    <div className={s.city}>{user.location.city}</div>
                </div>
            </div>
        )
    })

    return (
        <div className={s.fon}>
            <div className={s.container}>
                {users_divs}
            </div>
        </div>
    )
}

export default Users