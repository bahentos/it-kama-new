import React from "react";
import s from './Users.module.css'
import Paginator from '../Common/Paginator/Paginator';
import User from './User/User';
import { UsersType } from "../../types/types";

type PropsUsersType = {
    users: UsersType[],
    total_users_count: number,
    current_page: number, 
    on_page_change: (page: number) => void,
    page_size: number
    props: any
}

const Users: React.FC<PropsUsersType> = ({users, total_users_count, current_page, 
    on_page_change, page_size, ...props}) => {

    let users_div = users.map((user , index: number) => {
        return <User user={user} index={index} {...props} />
    })

    return (
        <div className={s.fon}>

            <div className={s.container}>
                <Paginator 
                total_items_count={total_users_count}
                current_page={current_page}
                on_page_change={on_page_change}
                page_size={page_size}
                portion_size={10}
                {...props} />
                {users_div}
            </div>
        </div>
    )
}
export default Users