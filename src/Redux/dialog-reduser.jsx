const MessageChange = 'MESSAGE-CHANGE'
const AddMessage = 'ADD-MESSAGE'
 
let InitialState ={
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

const DialogsPageReduser = (state = InitialState, action) => {
    switch (action.type) {
        case MessageChange:
           state.newMessageText = action.messageText
            return state
        case AddMessage:
            let newMessage = { id: 6, message: state.newMessageText }
            state.messages.push(newMessage)
            state.newMessageText = ' '
     return state
    default: return state 
    }}

export const messageChangeCreator = (textMessage) => ({
    type: MessageChange, messageText: textMessage
})

export const AddMessageCreator = () => ({
    type: AddMessage
})


export default DialogsPageReduser;