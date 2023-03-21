import Posts from './MyPosts'
import { onPostChangeActionCreator, addPostActionCreator } from '../../../Redux/profile-reduser'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newPostText: state.ProfilePage.newPostText,
    posts: state.ProfilePage.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostChange: (text) => {
      dispatch(onPostChangeActionCreator(text))
    }

  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)



export default PostsContainer;