import s from './MyPost.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <div >
        <img src='https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg' />
        <div>
          <div>post1</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
