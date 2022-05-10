import { NavLink } from 'react-router-dom'
import s from './Test.module.css'

const Test = (props) => {
    return (
        <div>
            <div className={s.item}>
                <NavLink to="/profile" className={s.link}
                    activeClassName={s.activeLink}
                >
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={s.link}>Dialogs</NavLink>
            </div>
        </div>
    )
}

export default Test