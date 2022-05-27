import React from "react";
import { add_message_action_creator, update_new_message_action_creator } from "../../redux/dialogs_reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>{(store) => {
      let state = store.getState()
      let addMessage = () => {
        store.dispatch(add_message_action_creator())
      }
    
      let updateTextMessage = (text) => {
        store.dispatch(update_new_message_action_creator(text))
      }

      return (<Dialogs dialogsData={state.dialogsPage.dialogsData}
        messagesData={state.dialogsPage.messagesData}
        newMessageText={state.dialogsPage.newMessageText}
        addMessage={addMessage}
        updateTextMessage={updateTextMessage} />)
    }
    }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;