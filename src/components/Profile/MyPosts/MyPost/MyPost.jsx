import s from './MyPost.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <div >
        <img src='https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg' />
        {props.postname3.message}
        {props.postname3.age}
      </div>
      <button>like</button> {props.LikeAmound}
    </div>
  );
};

export default Post;
