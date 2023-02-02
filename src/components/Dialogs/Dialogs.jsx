import DialogsItem from './DialogsItem/DialogsItem'
import s from './Dialogs.module.css'
import Message from './Message/Messsage'
import React from 'react'
import { AddMessageCreator, messageChangeCreator } from '../../Redux/dialog-reduser'
const Dialogs = (props) => {


    let dialogsElement = props.DialogsPage.dialogs.map(el => <DialogsItem name={el.name} id={el.id} />)

    let messageElement = props.DialogsPage.messages.map(m => <Message message={m.message} />)

    let Forvalue = props.DialogsPage.newMessageText

    let AddMessage = () => {
        props.dispatch(AddMessageCreator())
    }
    let onForOnChange = (e) => {
        let textMessage = e.target.value
        props.dispatch(messageChangeCreator(textMessage))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElement}
            </div>
            <div>
                {messageElement}
                <textarea value={Forvalue} onChange={onForOnChange}></textarea>
                <div>
                    <button onClick={AddMessage}>send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs