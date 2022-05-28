import React from "react";
import { connect } from "react-redux";
import { add_message_action_creator, update_new_message_action_creator } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
    dialogsData: state.dialogsPage.dialogsData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(add_message_action_creator())
    },
    updateTextMessage: (text) => {
      dispatch(update_new_message_action_creator(text))
    }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;