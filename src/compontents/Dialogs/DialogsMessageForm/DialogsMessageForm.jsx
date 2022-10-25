import React from "react";
import s from "./DialogsMessageForm.module.css";
import { Field, reduxForm } from 'redux-form';

const DialogsMessage = (props) => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form
      onSubmit={handleSubmit}
      className={s.inputAnswer}>
      <Field
        name='dialog_message_input'
        component='textarea'
        rows="1"
        placeholder="Type your message..."
      ></Field>
      <button disabled={pristine || submitting} ></button>
    </form>
  )
}

const DialogsMessageForm  =  reduxForm({
  form: 'dialogs_message'
})(DialogsMessage)


export default DialogsMessageForm;