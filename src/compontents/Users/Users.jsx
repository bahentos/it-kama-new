import React from "react";
import s from './Users.module.css'
import icon_user from './img/userDefaults.svg'
import { NavLink } from "react-router-dom";
import Paginator from '../Common/Paginator/Paginator';
import User from './User/User';


const Users = ({users, ...props}) => {

    let users_div = users.map((user, index) => {
        return <User user={user} index={index} {...props} />
    })

    return (
        <div className={s.fon}>

            <div className={s.container}>
                <Paginator {...props} />
                {users_div}
            </div>
        </div>
    )
}
export default Users