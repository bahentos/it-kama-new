import s from "./MyPosts.module.css";
import Post from "./Post/Post";

//Какой-то комментарий

const MyPosts = () => {
  return (
    <div className={s.content}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
