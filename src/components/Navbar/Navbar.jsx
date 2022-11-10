import s from'./Navbar.module.css'

const NavBar = () => {
    return(
        <nav className={s.Nav}>
        <div className={s.item} >
          <a href='/Profile'>Profile</a>
        </div>
        <div className={s.item}>
          <a href='/Dialogs'>Message</a>
        </div>
        <div className={s.item}>
          <a href='Video'>Video</a>
        </div>
        <div className={s.item}>
          <a href='/Music'>Music</a>
        </div>
        <div className={s.item} >
          <a href='/Option'>Option</a>
        </div>
      </nav>
    )
}

export default NavBar;