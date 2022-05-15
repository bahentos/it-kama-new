import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id
  
  return (
    <NavLink className={s.dialog}
      style={({ isActive }) => {
        return {
          color: isActive ? "red" : "",
          backgroundColor: isActive ? "var(--bluegray-40)" : ''
        };
      }}
      to={path}>
      {props.name}
    </NavLink>
  )
}

const Message = (props) => {
  return (
    <div className={s.messages}>
      {props.text}
    </div>
  )
}

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
  return (
    <>
      <div className={s.container}>
        <div className={s.dialogsItems}>
          <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}></DialogItem>
          <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}></DialogItem>
          <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}></DialogItem>
          <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}></DialogItem>
          <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}></DialogItem>
        </div>
        <div className={s.messagesItems}>
          <Message text={messagesData[0].message}></Message>
          <Message text={messagesData[1].message}></Message>
          <Message text={messagesData[2].message}></Message>
          <Message text={messagesData[3].message}></Message>
          <Message text={messagesData[4].message}></Message>
        </div>
      </div>
    </>
  );
};

export default Dialogs;