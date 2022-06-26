import s from "./formControls.module.css";

const FormControl = ({input, meta: {touched, error, warning }, ...props}) => {
    const hasError = touched && error
    return (
        <div className={s.container + " " +  (hasError ? s.redborder : '')}>
           {props.children}
            {hasError && <span className={s.error} >{error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl> 
}
export const InputField = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl> 
}
