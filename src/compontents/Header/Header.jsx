import s from './Header.module.css'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt='logo'/>
            </div>
        </header>
    )
}

export default Header