import React from "react";
import { connect } from "react-redux";
import { add_message } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    dialogsData: state.dialogsPage.dialogsData,
  }
}


export default compose(
  connect(mapStateToProps, {add_message}),
  withAuthRedirect
)(Dialogs)