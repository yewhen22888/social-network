import { connect } from 'react-redux'
import { AddMessageCreator, messageChangeCreator } from '../../Redux/dialog-reduser'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddMessage: () => {
            dispatch(AddMessageCreator())

        },
        onForOnChange: (textMessage) => {
            dispatch(messageChangeCreator(textMessage))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer