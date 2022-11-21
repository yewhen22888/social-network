import DialogsItem from './DialogsItem/DialogsItem'
import s from './Dialogs.module.css'
import Message from './Message/Messsage'
import React from 'react'

const Dialogs = (props) => {


    let dialogsElement = props.dialogs.map(el => <DialogsItem name={el.name} id={el.id} />)

    let messageElement = props.messages.map(m => <Message message={m.message} />)

    let Refdlyamessage = React.createRef ();

    let addmessage = () => {
        let text = Refdlyamessage.current.value;
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              
                {dialogsElement}
            </div>
            <div>
                {messageElement}
                <textarea ref={Refdlyamessage}></textarea>
               <div> 
                <button onClick={addmessage}>send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs