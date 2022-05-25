import React from "react";
import { add_message_action_creator, update_new_message_action_creator } from "../../redux/dialogs_reducer";
import DialogItem from "./Dialogitem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElement = props.state.dialogsPage.dialogsData.map( (dialog, index) =>  <DialogItem id={dialog.id} key={index + '_dialogsData'} name={dialog.name}></DialogItem>)
  let newMessageElement = React.createRef()

  let addMessage = () => {
    props.dispatch(add_message_action_creator())
  }

  let onChangeMessage = () => {
    props.dispatch(update_new_message_action_creator(newMessageElement.current.value))
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.dialogsItems}>
          {dialogsElement}
        </div>
        <div className={s.messagesItems}>
          <Message messagesData={props.state.dialogsPage.messagesData} />
          <div className={s.inputAnswer}>
            <textarea
              ref={newMessageElement}
              rows="1"
              onChange={onChangeMessage}
              placeholder="Type your message..."
              value={props.state.dialogsPage.newMessageText}
            ></textarea>
            <button
              onClick={addMessage} ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;