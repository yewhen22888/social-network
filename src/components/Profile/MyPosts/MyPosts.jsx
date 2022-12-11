import Post from './MyPost/MyPost';
import s from './MyPosts.module.css'
import React from 'react';

const Posts = (props) => {

  let postelement = props.profilePage.posts.map(el => <Post message={el.message} likeCounts={el.likeCounts} />)

  let RefaddPost = React.createRef();

  let onPostChange = () => {
    let text = RefaddPost.current.value;
    props.postChange(text)
  };

  let addPost = () => {
    props.addPost()
  };

  let deleteArea = (props) => {
    props.deleteArea()
  }
  
  return (
    <div className={s.postBar}>
      <div>
        My post
      </div>
      <textarea placeholder='YourText' onChange={onPostChange} onClick={deleteArea} ref={RefaddPost} value={props.profilePage.newPostText}></textarea>
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