import s from './MyPost.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg' />
        <div>{props.message}</div>
        <div>
          <button>like {props.likeCounts}</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
