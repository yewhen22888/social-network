import Post from './MyPost/MyPost';
import s from './MyPosts.module.css'
import React from 'react';
import { onPostChangeActionCreator,addPostActionCreator} from '../../../State/state'


const Posts = (props) => {

  let postelement = props.profilePage.posts.map(el => <Post message={el.message} likeCounts={el.likeCounts} />)

  let RefaddPost = React.createRef();

  let onPostChange = () => {
    let text = RefaddPost.current.value;
    props.dispatch(onPostChangeActionCreator(text))

  };

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  };

   return (
    <div className={s.postBar}>
      <div>
        My post
      </div>
      <textarea placeholder='YourText' onChange={onPostChange} ref={RefaddPost} value={props.profilePage.newPostText}></textarea>
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