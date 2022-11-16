import Post from './MyPost/MyPost';
import s from './MyPosts.module.css'


const Posts = (props) => {

  let posts = [
    { id: 1, message: "Hi im okay", likeCounts: '12' },
    { id: 1, message: 'How old are you', likeCounts: '13' },
    { id: 1, message: 'i love football', likeCounts: '7' },

  ]

  let postElement = posts.map(p => <Post message={p.message} likeCounts={p.id} />)

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