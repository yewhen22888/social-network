import s from './MyPost.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <div >
        <img src='https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg' />
        post1
      </div>
    </div>
  );
};

export default Post;
