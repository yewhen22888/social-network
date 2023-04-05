import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const NavBar = () => {
  return (
    <nav className={s.Nav}>
      <div className={s.item} >
        <NavLink to='/Profile' className={navData => navData.isActive ? s.active : s.item}
        >Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Dialogs' className={navData => navData.isActive ? s.active : s.item}
        >Message</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='Video' className={navData => navData.isActive ? s.active : s.item}
        >Video</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Music' className={navData => navData.isActive ? s.active : s.item}
        >Music</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/Option' className={navData => navData.isActive ? s.active : s.item}
         >Option</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to='/UsersPage' className={navData => navData.isActive ? s.active : s.item}
         >Friends</NavLink>
      </div>
      <div>
          
      </div>
    </nav>
  )
}

export default NavBar;