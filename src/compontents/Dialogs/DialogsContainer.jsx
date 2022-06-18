import React from "react";
import { connect } from "react-redux";
import { add_message, update_new_message } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
    dialogsData: state.dialogsPage.dialogsData,
  }
}


export default compose(
  connect(mapStateToProps, {update_new_message, add_message}),
  withAuthRedirect
)(Dialogs)