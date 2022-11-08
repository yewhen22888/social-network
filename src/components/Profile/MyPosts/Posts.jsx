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
        <Post message='hello my friends' LikeAmound='43' />
        <Post message='im frontent men'  LikeAmound='2' />
       

      </div>
    </div >
  )
}

export default Posts;