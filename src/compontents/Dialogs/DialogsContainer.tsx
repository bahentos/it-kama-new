import { connect } from "react-redux";
import { add_message } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getDialogsDataSelector, getMessagesDataSelector } from '../../redux/dialogs_selectors';
import { AppStateType } from "../../redux/redux_store";
import { compose } from "@typed/compose";


let mapStateToProps = (state: AppStateType) => {
  return {
    messagesData: getMessagesDataSelector(state),
    dialogsData: getDialogsDataSelector(state)
  }
}


export default compose(
  connect(mapStateToProps, {add_message}),
  withAuthRedirect
)(Dialogs)