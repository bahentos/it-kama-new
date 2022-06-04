import s from './Preloader.module.css'
import loading from '../../../assets/isLoad_5.svg'

const Preloader = (props) => {
    return (
        <div className={s.container}>
            <img src={props.src != undefined? props.src : loading} alt={props.alt} />
        </div>
    )
}

export default Preloader