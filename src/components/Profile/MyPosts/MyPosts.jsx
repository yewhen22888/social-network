import Post from './MyPost/MyPost';
import s from './MyPosts.module.css'
import React from 'react';

const Posts = (props) => {
  let postselement = props.posts.map(el => <Post message={el.message} likeCounts={el.likeCounts} />)

  let RefaddPost = React.createRef();

  let addPost = () => {
    let postMessage = RefaddPost.current.value;
    addPost(postMessage)
  }
  return (
    <div className={s.postBar}>
      <div>
        My post
      </div>
      <textarea ref={RefaddPost}></textarea>
      <div>
        <button onClick={addPost}>New Post</button>
      </div>
      <div className='posts'>
        {postselement}
      </div>
    </div >
  )
}

export default Posts;