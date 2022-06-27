import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { InputField } from "../Common/FormsControls/formControls";
import { requiredField } from "../Common/Validators/validators";
import s from "./Login.module.css";
import { loginThunk, logoutThunk } from '../../redux/auth_reducer';
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="" className={s.form}>
            <div className={s.login} >
                <Field
                    validate={[requiredField]}
                    name="email"
                    placeholder="Login"
                    component={InputField}
                    type="text" />
            </div>
            <div className={s.pass} >
                <Field
                    name="password"
                    type="password"
                    validate={[requiredField]}
                    placeholder="Password"
                    component={InputField}/>
            </div>
            <div className={s.remember} >
                <Field
                    name="rememberMe"
                    component="input"
                    type={"checkbox"} /> <span>Remember me</span>
            </div>
            {props.error && <div className={s.formError}>{props.error}</div>}
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
        const { email, password, rememberMe } = formData
        props.loginThunk(email, password, rememberMe)
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

const mapStateToProps = (state) => {
    return {
        is_auth: state.auth.is_auth
    }
}

export default connect(mapStateToProps, { loginThunk, logoutThunk })(Login)