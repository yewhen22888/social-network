import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Illy
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Viktor
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Dimon
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Sveta
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    hi how are you?
                </div>
                <div className={s.messages}>
                    go to football today
                </div>

            </div>
        </div>
    )
}
export default Dialogs