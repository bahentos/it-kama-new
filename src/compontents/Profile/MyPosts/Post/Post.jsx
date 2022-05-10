import s from "./Post.module.css";
import avatar from "../../../../assets/userDefaults.svg";

const Post = (props) => {
  return (
    <>
      <div className={s.container}>
        <div className={s.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div className={s.space}></div>
        <div className={s.item}>{props.message}</div>
      </div>
      <div className={s.like}>like {props.like_count}</div>
    </>
  );
};

export default Post;
