import s from "./TextArea.module.css";

const TextArea = ({input, meta, ...props}) => {
    return (
        <div className={s.container}>
            <textarea {...input} {...props} />
        </div>
    )
}

export default TextArea