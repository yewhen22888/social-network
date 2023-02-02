const MessageChange = 'MESSAGE-CHANGE'
const AddMessage = 'ADD-MESSAGE'

const DialogsPageReduser = (state, action) => {
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