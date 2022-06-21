import React from "react";
import DialogItem from "./Dialogitem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { reset } from 'redux-form';
import DialogsMessageForm from "./DialogsMessageForm/DialogsMessageForm";


const Dialogs = (props) => {

  let dialogsElement = props.dialogsData.map((dialog, index) => {
    return <DialogItem
      id={dialog.id}
      key={index + '_dialogsData'}
      name={dialog.name}></DialogItem>
  })

  const onSubmit = (formData, dispatch) => {
    props.add_message(formData.dialog_message_input)
    dispatch(reset("dialogs_message"))
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.dialogsItems}>
          {dialogsElement}
        </div>
        <div className={s.messagesItems}>
          <Message messagesData={props.messagesData} />
          <DialogsMessageForm onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default Dialogs;