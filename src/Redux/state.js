import ProfilePageReduser from './profile-reduser'
import DialogsPageReduser from './dialog-reduser'

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
    subscribe(observer) {
    this.subscriber = observer
  },
  subscriber() {
  },
  dispatch(action) {
    this._state.ProfilePage = ProfilePageReduser(this._state.ProfilePage,action);
   this._state.DialogsPage = DialogsPageReduser(this._state.DialogsPage,action);
    this.subscriber(this._state);
    
  }
}




export default Store