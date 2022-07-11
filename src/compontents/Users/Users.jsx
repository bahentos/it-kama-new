import React from "react";
import s from './Users.module.css'
import Paginator from '../Common/Paginator/Paginator';
import User from './User/User';


const Users = ({users, ...props}) => {

    let users_div = users.map((user, index) => {
        return <User user={user} index={index} {...props} />
    })

    return (
        <div className={s.fon}>

            <div className={s.container}>
                <Paginator 
                total_items_count={props.total_users_count}
                current_page={props.current_page}
                on_page_change={props.on_page_change}
                page_size={props.page_size}
                portion_size={10}
                {...props} />
                {users_div}
            </div>
        </div>
    )
}
export default Users