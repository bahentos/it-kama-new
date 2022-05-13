import s from "./MyPosts.module.css";
import Post from "./Post/Post";

//Какой-то комментарий

const MyPosts = () => {
  return (
    <div className={s.container}>
      My posts
      <div className={s.addtextContainer}>
        <textarea></textarea>
        <button>Add post</button>
      </div >
      <div className={s.messageContainer}>
        <Post like_count='2' message='Est et cupidatat minim voluptate eiusmod dolore commodo culpa proident pariatur consectetur.' />
        <Post like_count='5' message='Exercitation et anim minim voluptate ad nisi commodo ipsum commodo ad et elit laboris.' />
        <Post like_count='7' message='Ut velit pariatur ex ex ipsum veniam laboris ipsum tempor ipsum enim velit.' />
        <Post like_count='22' message='Et excepteur do est labore velit deserunt duis.' />
      </div>
    </div>
  );
};

export default MyPosts;
