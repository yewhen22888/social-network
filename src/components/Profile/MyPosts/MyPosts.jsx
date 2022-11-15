import Post from './MyPost/MyPost';
import s from './MyPosts.module.css'


const Posts = (props) => {

  let postData = [
    { id: 1, message: "Hi im okay", likeCounts: '12' },
    { id: 1, message: 'How old are you', likeCounts: '13' },
    { id: 1, message: 'i love football', likeCounts: '7' },

  ]
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
        <Post message={postData[0].message} likeCounts={postData[0].likeCounts} />
        <Post message={postData[1].message} likeCounts={postData[1].likeCounts} />
        <Post message={postData[2].message} likeCounts={postData[2].likeCounts} />
      </div>
    </div >
  )
}

export default Posts;