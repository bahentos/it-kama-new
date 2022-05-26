import React from "react";
import DialogItem from "./Dialogitem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElement = props.dialogsData.map( (dialog, index) =>  <DialogItem id={dialog.id} key={index + '_dialogsData'} name={dialog.name}></DialogItem>)
  let newMessageElement = React.createRef()

  let onAddMessage = () => {
    props.addMessage()
  }

  let onChangeMessage = () => {
    props.updateTextMessage(newMessageElement.current.value)
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.dialogsItems}>
          {dialogsElement}
        </div>
        <div className={s.messagesItems}>
          <Message messagesData={props.messagesData} />
          <div className={s.inputAnswer}>
            <textarea
              ref={newMessageElement}
              rows="1"
              onChange={onChangeMessage}
              placeholder="Type your message..."
              value={props.newMessageText}
            ></textarea>
            <button
              onClick={onAddMessage} ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;