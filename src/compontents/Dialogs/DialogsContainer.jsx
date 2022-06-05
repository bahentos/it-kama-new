import React from "react";
import { connect } from "react-redux";
import { add_message, update_new_message } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
    dialogsData: state.dialogsPage.dialogsData
  }
}


const DialogsContainer = connect(mapStateToProps, {update_new_message, add_message})(Dialogs);

export default DialogsContainer;