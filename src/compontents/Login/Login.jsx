import { Field, reduxForm } from "redux-form";
import { InputField } from "../Common/FormsControls/formControls";
import { maxLength, requiredField } from "../Common/Validators/validators";
import s from "./Login.module.css";

const maxLength10 = maxLength(10)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="" className={s.form}>
            <div className={s.login} >
                <Field 
                validate={[requiredField, maxLength10]}
                name="login" 
                placeholder="Login" 
                component={InputField} 
                type="text" />
            </div>
            <div className={s.pass} >
                <Field 
                name="password" 
                validate={[requiredField, maxLength10]}
                placeholder="Password" 
                component={InputField} 
                type="password" />
            </div>
            <div className={s.remember} >
                <Field 
                name="remember" 
                component="input" 
                type={"checkbox"} /> <span>Remember me</span>
            </div>
            <div className={s.submit} >
                <button className={s.btn} >Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={s.container} >
            <div className={s.formContainer} >
                <div className={s.text} >Login</div>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Login