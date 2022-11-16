import DialogsItem from './DialogsItem/DialogsItem'
import s from './Dialogs.module.css'
import Message from './Message/Messsage'


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Illy' },
        { id: 2, name: 'Dimon' },
        { id: 3, name: 'Evelyn' },
        { id: 4, name: 'Nikol' },
        { id: 5, name: 'Jewheniy' },
    ]

    let dialogsElement = dialogs.map(el => <DialogsItem name={el.name} id={el.id} />)

    let messages = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how are you' },
        { id: 3, message: 'how old are you' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' },
    ]

    let messageElement = messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div>
            {   messageElement}
            </div>
        </div>
    )
}
export default Dialogs