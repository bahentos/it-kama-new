import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src='https://i.pinimg.com/originals/5a/ae/50/5aae503e4f037a5a4375944d8861fb6a.png' />
            </div>
        </header>
    )
}

export default Header