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


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name='illy' id='1' />
                <DialogsItem name='dimon' id='2' />
                <DialogsItem name='evelyn' id='3' />
                <DialogsItem name='nikol' id='4' />
                <DialogsItem name='jewheniy' id='5' />
            </div>
            <div>
            <Message message='hi'/>
            <Message message='how are you'/>
            <Message message='how old are you'/>
            <Message message='hi i am fine'/>


            </div>
        </div>
    )
}
export default Dialogs