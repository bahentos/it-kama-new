import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.image}>
        <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/04/24/g_1-1.jpg" />
      </div>
      <div>Avatar + description</div>
      <div>
        My posts
        <div>New Post</div>
        <div className={s.posts}>
          <div className={s.item}>Post1</div>
          <div className={s.item}>Post2</div>
          <div className={s.item}>Post3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile