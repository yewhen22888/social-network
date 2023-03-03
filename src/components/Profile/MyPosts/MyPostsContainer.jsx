import Posts from './MyPosts'
import React from 'react';
import { onPostChangeActionCreator, addPostActionCreator } from '../../../Redux/profile-reduser'
import MyContext from '../../../context';


const PostsContainer = (props) => {



  return (
    <MyContext.Consumer>
      {(store) => {
        
        let state = store.getState()

        let onPostChange = (text) => {
          store.dispatch(onPostChangeActionCreator(text))

        };

        let addPost = () => {
          store.dispatch(addPostActionCreator())
        };

        return (
          <Posts updateNewPostChange={onPostChange}
            addPost={addPost}
            posts={state.ProfilePage.posts}
            newPostText={state.newPostText}

          />)
      }}
    </MyContext.Consumer>
  )
}

export default PostsContainer;