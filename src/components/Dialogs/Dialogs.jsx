import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


const DialogsItem = (props) => {
    let path = "/Dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Illy' },
        { id: 2, name: 'Dimon' },
        { id: 3, name: 'Evelyn' },
        { id: 4, name: 'Nikol' },
        { id: 5, name: 'Jewheniy' },
    ]

    let messagesData = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how are you' },
        { id: 3, message: 'how old are you' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' },
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />


            </div>
        </div>
    )
}
export default Dialogs