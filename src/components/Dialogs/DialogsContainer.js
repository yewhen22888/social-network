import { AddMessageCreator, messageChangeCreator } from '../../Redux/dialog-reduser'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    let onForOnChange = (textMessage) => {
        props.dispatch(messageChangeCreator(textMessage))
    }
    let AddMessage = () => {
        props.dispatch(AddMessageCreator())
    }
    let Forvalue = props.state.DialogsPage.newMessageText

    let messages = props.state.DialogsPage.messages
    let dialogs = props.state.DialogsPage.dialogs
    return (

        <Dialogs onForOnChange={onForOnChange}
            AddMessage={AddMessage}
            Forvalue={Forvalue}
            messages={messages}
            dialogs={dialogs} />
    )
}

export default DialogsContainer