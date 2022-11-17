import Post from './MyPost/MyPost';
import s from './MyPosts.module.css'


const Posts = (props) => {
  let postselement =props.posts.map(el => <Post message={el.message} likeCounts={el.likeCounts}/>)  
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
      {postselement}
      </div>
    </div >
  )
}

export default Posts;