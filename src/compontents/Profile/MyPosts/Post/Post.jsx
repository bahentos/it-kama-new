import s from "./Post.module.css";
import avatar from "../../../../assets/userDefaults.svg";

const Post = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div className={s.space}></div>
        <div className={s.item}>Post1</div>
      </div>
      <div className={s.like}>like</div>
    </>
  );
};

export default Post;
