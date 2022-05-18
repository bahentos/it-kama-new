import { NavLink } from "react-router-dom";
import s from "./Message.module.css";


const Message = (props) => {
  return (
    <div className={s.messages}>
      {props.text}
    </div>
  )
}


export default <Message></Message>;