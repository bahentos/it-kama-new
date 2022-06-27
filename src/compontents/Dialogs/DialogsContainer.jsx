import { connect } from "react-redux";
import { add_message } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import { getDialogsDataSelector, getMessagesDataSelector } from '../../redux/dialogs_selectors';


let mapStateToProps = (state) => {
  return {
    messagesData: getMessagesDataSelector(state),
    dialogsData: getDialogsDataSelector(state)
  }
}


export default compose(
  connect(mapStateToProps, {add_message}),
  withAuthRedirect
)(Dialogs)