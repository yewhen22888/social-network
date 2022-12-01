import Post from './MyPost/MyPost';
import s from './MyPosts.module.css'
import React from 'react';

const Posts = (props) => {
  
  let postelement = props.posts.map(el => <Post message={el.message} likeCounts={el.likeCounts} />)

  let RefaddPost = React.createRef();

  let onPostChange = () => {
    let text = RefaddPost.current.value;
    props.postChange(text)
  };

  let addPost = () => {
  
    props.addPost()
    RefaddPost.current.value = ''
  };

  return (
    <div className={s.postBar}>
      <div>
        My post
      </div>
      <textarea onChange={onPostChange} ref={RefaddPost}></textarea>
      <div>
        <button onClick={addPost}>New Post</button>
      </div>
      <div className='posts'>
        {postelement}
      </div>
    </div >
  )
}

export default Posts;