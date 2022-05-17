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

  let postsElement = postsData.map( post => <Post like_count={post.like_count} message={post.post} />)

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
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
