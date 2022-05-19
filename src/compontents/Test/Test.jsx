import s from './Test.module.css'

const Test = (props) => {
    return (
        <div>
            <div className={s.item}>
                {props.dialogsPage.messagesData[2].message}
            </div>
        </div>
    )
}

export default Test