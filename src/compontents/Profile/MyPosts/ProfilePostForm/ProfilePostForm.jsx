import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./ProfilePostForm.module.css";
import { maxLength, alphaNumeric } from '../../../Common/Validators/validators';
import { TextArea } from "../../../Common/FormsControls/formControls";

const maxLength10 = maxLength(10)

const ProfilePost = (props) => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit} className={s.addtextContainer}>
      <div className={s.containerTextarea}>
        <Field
          validate={[alphaNumeric]}
          component={TextArea}
          name='profile_post'
        ></Field>
      </div>
      <button
        // disabled={pristine || submitting}
        className={s.btn}>Add post</button>
    </form >
  )
}

const ProfilePostForm = reduxForm({
  form: 'profile_post'
})(ProfilePost)

export default ProfilePostForm