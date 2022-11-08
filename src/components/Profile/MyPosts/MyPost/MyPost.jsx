import s from './MyPost.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      {props.postname.post.map(a => {
        return <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg' />
          <div> <button>like</button></div>
        </div>


      })}
      <div >


      </div>

    </div>
  );
};

export default Post;
