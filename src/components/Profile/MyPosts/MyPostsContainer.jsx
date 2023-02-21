import Posts from './MyPosts'
import React from 'react';
import { onPostChangeActionCreator, addPostActionCreator } from '../../../Redux/profile-reduser'


const PostsContainer = (props) => {

  let state = props.store.getState()

  let onPostChange = (text) => {
    props.store.dispatch(onPostChangeActionCreator(text))

  };

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  };

  return (
    <Posts updateNewPostChange={onPostChange}
      addPost={addPost}
      posts={state.ProfilePage.posts}
      newPostText={state.newPostText}

    />
  )
}

export default PostsContainer;