import Post from './MyPost/MyPost';
import s from './Posts.module.css'


const Posts = (props) => {
  return (
    <div>
      <div>
        My post
      </div>
      <textarea></textarea>
      <div>
        <button>New Post</button>
      </div>
      <div className='posts'>
        <Post postname={props.postname} />
      </div>
    </div >
  )
}

export default Posts;