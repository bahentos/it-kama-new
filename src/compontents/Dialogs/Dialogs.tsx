import React from "react";
import DialogItem from "./Dialogitem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { reset } from 'redux-form';
import DialogsMessageForm from "./DialogsMessageForm/DialogsMessageForm";
import { DialogType, MessageType } from "../../types/types";


type PropsDialogsType = {
  dialogsData: DialogType[],
  messagesData: MessageType[],
  add_message: (dialog_message_input: string) => void
}

const Dialogs: React.FC<PropsDialogsType> = ({dialogsData, messagesData, add_message, ...props}) => {

  let dialogsElement = dialogsData.map((dialog: DialogType, index: number) => {
    return <DialogItem
      id={dialog.id}
      key={index + '_dialogsData'}
      name={dialog.name}></DialogItem>
  })

  const onSubmit = (formData: any , dispatch: any) => {
    add_message(formData.dialog_message_input)
    dispatch(reset("dialogs_message"))
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.dialogsItems}>
          {dialogsElement}
        </div>
        <div className={s.messagesItems}>
          <Message messagesData={messagesData} />
          <DialogsMessageForm onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default Dialogs;