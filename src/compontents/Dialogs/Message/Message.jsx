import s from "./Message.module.css";
import triangle from './img/triangle.svg'


const Message = (props) => {
  let messages = props.messagesData.map( (message, index) => 
    (<div key={index + '_message'} className={s.messageContainer}>
      <img src={triangle} alt="" />
      <div className={s.message}>{message.message}</div>
    </div>)
   )
  return (
    <div className={s.messagesArea}>
      {messages}
    </div>
  )
}


export default Message;