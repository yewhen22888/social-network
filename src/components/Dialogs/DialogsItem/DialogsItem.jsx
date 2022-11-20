import { NavLink } from 'react-router-dom'
import s from './DialogsItem.module.css'

const DialogsItem = (props) => {
    let path = "/Dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={navData => navData.isActive ? s.active : s.NavLink}>
                <img src='https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png' />
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogsItem