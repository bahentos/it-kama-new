import s from "./MyPosts.module.css";

//Какой-то комментарий

const MyPosts = () => {
  return (
    <div className={s.content}>
      My posts
      <div></div>
      <div className={s.posts}>
        <div className={s.item}>Post1</div>
        <div className={s.item}>Post2</div>
        <div className={s.item}>Post3</div>
      </div>
    </div>
  );
};

export default MyPosts;
