import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

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

export default DialogItem;