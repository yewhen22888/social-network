import Post from './MyPost/MyPost';
import s from './MyPosts.module.css'


const Posts = (props) => {

  let postElement = props.posts.map(p => <Post message={p.message} likeCounts={p.id} />)

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
        {postElement}
      </div>
    </div >
  )
}

export default Posts;