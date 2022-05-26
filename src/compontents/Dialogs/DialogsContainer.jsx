import React from "react";
import { add_message_action_creator, update_new_message_action_creator } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let addMessage = () => {
    props.dispatch(add_message_action_creator())
  }

  let updateTextMessage = (text) => {
    props.dispatch(update_new_message_action_creator(text))
  }

  return (<Dialogs dialogsData={props.state.dialogsPage.dialogsData} 
                  messagesData={props.state.dialogsPage.messagesData} 
                  addMessage={addMessage} 
                  updateTextMessage={updateTextMessage} />)

export default DialogsContainer;