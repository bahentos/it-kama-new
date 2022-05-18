import { NavLink } from "react-router-dom";
import DialogItem from "./Dialogitem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElement = props.dialogsData.map( dialog =>  <DialogItem id={dialog.id} name={dialog.name}></DialogItem>)
  let messagesElement = props.messagesData.map( message => <Message text={message.message}></Message>)
  
  return (
    <>
      <div className={s.container}>
        <div className={s.dialogsItems}>
          {dialogsElement}
        </div>
        <div className={s.messagesItems}>
          {messagesElement}
        </div>
      </div>
    </>
  );
};

export default Dialogs;