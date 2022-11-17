import DialogsItem from './DialogsItem/DialogsItem'
import s from './Dialogs.module.css'
import Message from './Message/Messsage'


const Dialogs = (props) => {


    let dialogsElement = props.dialogs.map(el => <DialogsItem name={el.name} id={el.id} />)

    let messageElement = props.messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div>
                {messageElement}
            </div>
        </div>
    )
}
export default Dialogs