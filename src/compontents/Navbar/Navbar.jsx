import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavLink to='/profile' 
            className={s.item + " " + s.profile} activeclassname={s.active}>
                <div className={s.pict} />
                Profile
            </NavLink>
            <NavLink to='/dialogs' className={s.item + " " + s.messages} activeclassname={s.active}>
                <div className={s.pict} />
                Messages
            </NavLink>
            <NavLink to='/users' className={s.item + " " + s.users} activeclassname={s.active}>
                <div className={s.pict} />
                Users
            </NavLink>
            <NavLink to='/news' className={s.item + " " + s.news} activeclassname={s.active}>
                <div className={s.pict} />
                News
            </NavLink>
            <NavLink to='/music' className={s.item + " " + s.music} activeclassname={s.active}>
                <div className={s.pict} />
                Music
            </NavLink>
            <NavLink to='/settings' className={s.item + " " + s.settings} activeclassname={s.active}>
                <div className={s.pict} />
                Settings
            </NavLink>
        </nav>
    )
}

export default Navbar
