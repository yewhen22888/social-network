import Post from './MyPost/MyPost';
import s from './MyPosts.module.css'


const Posts = (props) => {
  return (
    <div className={s.postBar}>
      <div>
        My post
      </div>
      <textarea></textarea>
      <div>
        <button>New Post</button>
      </div>
      <div className='posts'>
      {props.postselement}
      </div>
    </div >
  )
}

export default Posts;