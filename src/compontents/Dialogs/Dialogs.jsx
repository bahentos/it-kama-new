import DialogItem from "./Dialogitem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElement = props.dialogsPage.dialogsData.map( dialog =>  <DialogItem id={dialog.id} name={dialog.name}></DialogItem>)
  let messagesElement = props.dialogsPage.messagesData.map( message_item =>  <Message text={message_item.message}></Message>)
  
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