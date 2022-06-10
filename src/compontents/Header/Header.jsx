import s from './Header.module.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt='logo'/>
            </div>
            <div className={s.space}></div>
            <div className={s.authContainer}>{props.isAuth? 
            <NavLink className={s.btn} to={'/profile'} >{props.login}</NavLink> : 
            <NavLink className={s.btn} to={'/login'} >'login'</NavLink>}
                <NavLink className={s.btn} to={'/login'} ></NavLink>
            </div>
        </header>
    )
}

export default Header