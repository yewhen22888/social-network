import Post from './MyPost/MyPost';
import s from './Posts.module.css'

const Posts = () => {
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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

      </div>
    </div >
  )
}

export default Posts;