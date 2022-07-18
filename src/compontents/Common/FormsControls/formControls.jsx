import {TextareaAutosize, TextField } from "@mui/material";
import s from "./formControls.module.css";

const FormControl = ({ input, meta: { touched, error, warning }, ...props }) => {
    const hasError = touched && error
    return (
        <div className={s.container + " " + (hasError ? s.redborder : '')}>
            {props.children}
            {hasError && <span className={s.error} >{error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
}

export const InputField = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}

export const muiInputField = (props) => {
    const { label, input, meta, ...restProps } = props
    return <FormControl {...props}>
        <TextField
            label={label}
            placeholder={label}
            {...input}
            {...restProps}
        />
    </FormControl>
}

export const SelectField = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}> <select {...input} {...restProps} /> </FormControl>
}

export const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)

export const renderTextArea = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <TextareaAutosize
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)