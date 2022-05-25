import React from "react";
import DialogItem from "./Dialogitem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElement = props.state.dialogsPage.dialogsData.map( (dialog, index) =>  <DialogItem id={dialog.id} key={index + '_dialogsData'} name={dialog.name}></DialogItem>)
  let newMessageElement = React.createRef()

  let addMessage = () => {
    props.dispatch({type: 'ADD_MESSAGE'})
  }

  let onChangeMessage = () => {
    props.dispatch({type: 'UPDATE_NEW_MESSAGE_TEXT', new_text: newMessageElement.current.value})
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