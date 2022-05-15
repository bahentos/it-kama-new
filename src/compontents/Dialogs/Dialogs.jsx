import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";


const Dialogs = (props) => {
  return (
    <>
      <div className={s.container}>
        <div className={s.dialogsItems}>
            <NavLink className={s.dialog}
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
                backgroundColor: isActive ? "var(--bluegray-40)" : ''
              };
            }}
            to='/dialogs/1'>John</NavLink>
            <NavLink className={s.dialog}
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
                backgroundColor: isActive ? "var(--bluegray-40)" : ''
              };
            }}
            to='/dialogs/2'>Anny</NavLink>
            <NavLink className={s.dialog} to='/dialogs/3'>Stieven</NavLink>
            <NavLink className={s.dialog} to='/dialogs/4'>Tony</NavLink>
            <NavLink className={s.dialog} to='/dialogs/5'>Larry</NavLink>
        </div>
        <div className={s.messagesItems}>
          <div className={s.messages}>Do esse exercitation aliqua ea ullamco est anim do nostrud magna tempor.</div>
          <div className={s.messages}>Nulla ea eiusmod magna anim ex commodo ullamco duis nulla anim cupidatat do eiusmod ut.</div>
          <div className={s.messages}>Ea ea nisi voluptate deserunt Lorem proident.</div>
          <div className={s.messages}>Lorem fugiat exercitation in magna et laboris cillum amet enim excepteur irure ullamco.</div>
          <div className={s.messages}>Labore Lorem et veniam est.</div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;