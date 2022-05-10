import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item + " " + s.profile}>
                <div className={s.pict} />
                <a href='/profile'>Profile</a>
            </div>
            <div href='/messages' className={s.item + " " + s.messages}>
                <div className={s.pict} />
                <a href='/dialogs'>Messages</a>
            </div>
            <div href='/news' className={s.item + " " + s.news}>
                <div className={s.pict} />
                News
            </div>
            <div href='/music' className={s.item + " " + s.music}>
                <div className={s.pict} />
                Music
            </div>
            <div href='/settings' className={s.item + " " + s.settings}>
                <div className={s.pict} />
                Settings
            </div>
        </nav>
    )
}

export default Navbar
