import Dialogs from './../components/Dialogs/Dialogs'
import reRenderAllTree from './../rerender'
let state = {
  ProfilePage: {
    posts: [
      { message: "Hi im okay", likeCounts: '12' },
      { message: 'How old are you', likeCounts: '13' },
      { message: 'i love football', likeCounts: '7' },
    ],
    newPostText: 'YourText'
  },
  DialogsPage: {
    dialogs: [
      { id: 1, name: 'Illy' },
      { id: 2, name: 'Dimon' },
      { id: 3, name: 'Evelyn' },
      { id: 4, name: 'Nikol' },
      { id: 5, name: 'Jewheniy' },
    ],

    messages: [
      { id: 1, message: 'hi' },
      { id: 2, message: 'how are you' },
      { id: 3, message: 'how old are you' },
      { id: 4, message: 'yo' },
      { id: 5, message: 'yo' },
    ]
  }
}
export let addPost = () => {
  let newPost = {
    message: state.ProfilePage.newPostText,
    likeCounts: 0
  }

  state.ProfilePage.posts.push(newPost);
  state.ProfilePage.newPostText = ''
  reRenderAllTree(state);
}

export let postChange = (text) => {
  state.ProfilePage.newPostText = text

  reRenderAllTree(state);
}



export default state