import DialogsItem from './DialogsItem/DialogsItem'
import s from './Dialogs.module.css'
import Message from './Message/Messsage'
import React from 'react'
const Dialogs = (props) => {


    let dialogsElement = props.dialogs.map(el => <DialogsItem name={el.name} id={el.id} />)

    let messageElement = props.messages.map(m => <Message message={m.message} />)

   
   
    let onForOnChange = (e) => {
        let textMessage = e.target.value
        props.onForOnChange(textMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElement}
            </div>
            <div>
                {messageElement}
                <textarea value={props.Forvalue} onChange={onForOnChange}></textarea>
                <div>
                    <button onClick={props.AddMessage}>send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs