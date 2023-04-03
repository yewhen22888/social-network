const MessageChange = 'MESSAGE-CHANGE'
const AddMessage = 'ADD-MESSAGE'

let InitialState = {
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
  newMessageText: ''
}

const DialogsPageReducer = (state = InitialState, action) => {
  switch (action.type) {
    case MessageChange: {
      return {...state, newMessageText: action.messageText}
    }
    case AddMessage: {
      let newMessage = { id: 6, message: state.newMessageText}// https://www.youtube.com/watch?v=I8LNJpG60vI&ab_channel=IT-KAMASUTRA як правильно робити
      return {...state, messages: [newMessage, ...state.messages], newMessageText: ''}
    }
    default: return state
  }
}

export const messageChangeCreator = (textMessage) => ({
  type: MessageChange, messageText: textMessage
})

export const AddMessageCreator = () => ({
  type: AddMessage
})


export default DialogsPageReducer;