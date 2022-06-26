import s from './Header.module.css'
import logo from '../../assets/logo.png'
import { Navigate, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Header = (props) => {

    useEffect(() => {
        !props.isAuth ? <Navigate to='/login' /> : <Navigate to='/profile' />
    }, [props.isAuth])


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