import s from "./MyPosts.module.css";
import Post from "./Post/Post";

//Какой-то комментарий

const MyPosts = () => {
  let postsData = [
    { id: 1, post: 'Est et cupidatat minim voluptate eiusmod dolore commodo culpa proident pariatur consectetur.' , like_count: 2},
    { id: 2, post: 'Exercitation et anim minim voluptate ad nisi commodo ipsum commodo ad et elit laboris.' , like_count: 5},
    { id: 3, post: 'Ut velit pariatur ex ex ipsum veniam laboris ipsum tempor ipsum enim velit.' , like_count: 7},
    { id: 4, post: 'Et excepteur do est labore velit deserunt duis.' , like_count: 22},
  ]
  return (
    <div className={s.container}>
      My posts
      <div className={s.addtextContainer}>
        <div className={s.containerTextarea}>
          <textarea></textarea>
        </div>
        <button className={s.btn}>Add post</button>
      </div >
      <div className={s.messageContainer}>
        <Post like_count={postsData[0].like_count} message={postsData[0].post} />
        <Post like_count={postsData[1].like_count} message={postsData[1].post} />
        <Post like_count={postsData[2].like_count} message={postsData[2].post} />
        <Post like_count={postsData[3].like_count} message={postsData[3].post} />
      </div>
    </div>
  );
};

export default MyPosts;
