
const PostChange = 'POST-CHANGE'
const AddPost = 'ADD-POST'
const MessageChange = 'MESSAGE-CHANGE'
const AddMessage = 'ADD-MESSAGE'
let Store = {
  _state: {
    ProfilePage: {
      posts: [
        { message: "Hi im okay", likeCounts: '12' },
        { message: 'How old are you', likeCounts: '13' },
        { message: 'i love football', likeCounts: '7' },
      ],
      newPostText: ''
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
      ],
      newMessageText: ' '
    }
  },
  getState() {
    return this._state
  },
  _addPost() {
    let newPost = {
      message: this._state.ProfilePage.newPostText,
      likeCounts: 0

    }

    this._state.ProfilePage.posts.push(newPost);
    this._state.ProfilePage.newPostText = ' '
    this.subscriber(this._state);
  },
  _postChange(text) {
    this._state.ProfilePage.newPostText = text;


    this.subscriber(this._state);
  },
  subscribe(observer) {
    this.subscriber = observer
  },
  subscriber() {
  },
  dispatch(action) {
    if (action.type === AddPost) {
      this._addPost()
    } else if (action.type === PostChange) {
      this._postChange(action.textt)
    } else if (action.type === MessageChange) {
      this._state.DialogsPage.newMessageText = action.messageText
      this.subscriber(this._state)
    } else if (action.type === AddMessage) {
      let newMessage = { id: 6, message: this._state.DialogsPage.newMessageText }
      this._state.DialogsPage.messages.push(newMessage)
      this._state.DialogsPage.newMessageText = ' '
      this.subscriber(this._state)
    }
  }
}

export const onPostChangeActionCreator = (text) => {
  return {
    type: PostChange, textt: text
  }
}

export const addPostActionCreator = () => {
  return {
    type: AddPost
  }
}

export const messageChangeCreator = (textMessage) => ({
  type: MessageChange, messageText: textMessage
})

export const AddMessageCreator = () => ({
  type: AddMessage
})










export default Store