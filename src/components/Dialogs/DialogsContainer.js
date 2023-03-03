import { AddMessageCreator, messageChangeCreator } from '../../Redux/dialog-reduser'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    let State = props.store.getState()
    let onForOnChange = (textMessage) => {
        props.store.dispatch(messageChangeCreator(textMessage))
    }   
    let AddMessage = () => {
        props.store.dispatch(AddMessageCreator())
    }
    let Forvalue = State.DialogsPage.newMessageText

    let messages = State.DialogsPage.messages
    let dialogs = State.DialogsPage.dialogs
    return (

        <Dialogs onForOnChange={onForOnChange}
            AddMessage={AddMessage}
            Forvalue={Forvalue}
            messages={messages}
            dialogs={dialogs} />
    )
}

export default DialogsContainer