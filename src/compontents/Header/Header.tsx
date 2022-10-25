import s from './Header.module.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import React from 'react'
import { PropsHeaderType } from './HeaderContainer'

const Header: React.FC<PropsHeaderType> = (props) => {

    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt='logo' />
            </div>
            <div className={s.space}></div>
            <div className={s.authContainer}>
                {props.isAuth ?
                <button className={s.btn} onClick={props.logoutThunk} >{props.login} Logout</button> :
                    <NavLink className={s.btn} to={'/login'} >Login</NavLink>}
            </div>
        </header>
    )
}

export default Header