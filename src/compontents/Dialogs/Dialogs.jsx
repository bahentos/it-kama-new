import { NavLink } from "react-router-dom";
import DialogItem from "./Dialogitem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Anny' },
    { id: 3, name: 'Stieven' },
    { id: 4, name: 'Tony' },
    { id: 5, name: 'Larry' }
  ]

  let messagesData = [
    { id: 1, message: 'Do esse exercitation aliqua ea ullamco est anim do nostrud magna tempor.' },
    { id: 2, message: 'Nulla ea eiusmod magna anim ex commodo ullamco duis nulla anim cupidatat do eiusmod ut.' },
    { id: 3, message: 'Ea ea nisi voluptate deserunt Lorem proident.' },
    { id: 4, message: 'Lorem fugiat exercitation in magna et laboris cillum amet enim excepteur irure ullamco.' },
    { id: 5, message: 'Labore Lorem et veniam est.' }
  ]

  let dialogsElement = dialogsData.map( dialog =>  <DialogItem id={dialog.id} name={dialog.name}></DialogItem>)
  let messagesElement = messagesData.map( message => <Message text={message.message}></Message>)
  
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