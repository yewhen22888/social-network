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
        <Post  postname3={props.postname2}/>
        <Post message='im frontent men'  LikeAmound='2' />
       

      </div>
    </div >
  )
}

export default Posts;