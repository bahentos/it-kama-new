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
  return (
    <>
      <div className={s.container}>
        <div className={s.dialogsItems}>
          <DialogItem id='1' name='John'></DialogItem>
          <DialogItem id='2' name='Anny'></DialogItem>
          <DialogItem id='3' name='Stieven'></DialogItem>
          <DialogItem id='4' name='Tony'></DialogItem>
          <DialogItem id='5' name='Larry'></DialogItem>
        </div>
        <div className={s.messagesItems}>
          <Message text='Do esse exercitation aliqua ea ullamco est anim do nostrud magna tempor.'></Message>
          <Message text='Nulla ea eiusmod magna anim ex commodo ullamco duis nulla anim cupidatat do eiusmod ut.'></Message>
          <Message text='Ea ea nisi voluptate deserunt Lorem proident.'></Message>
          <Message text='Lorem fugiat exercitation in magna et laboris cillum amet enim excepteur irure ullamco.'></Message>
          <Message text='Labore Lorem et veniam est.'></Message>
        </div>
      </div>
    </>
  );
};

export default Dialogs;