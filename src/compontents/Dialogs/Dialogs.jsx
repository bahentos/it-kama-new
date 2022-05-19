import DialogItem from "./Dialogitem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElement = props.dialogsPage.dialogsData.map( dialog =>  <DialogItem id={dialog.id} name={dialog.name}></DialogItem>)
  
  return (
    <>
      <div className={s.container}>
        <div className={s.dialogsItems}>
          {dialogsElement}
        </div>
        <div className={s.messagesItems}>
          <Message messagesData={props.dialogsPage.messagesData} />
        </div>
      </div>
    </>
  );
};

export default Dialogs;