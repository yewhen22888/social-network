import s from'./Navbar.module.css'

const NavBar = () => {
    return(
        <nav className={s.Nav}>
        <div className={s.item} >
          <a>Profile</a>
        </div>
        <div className={s.item}>
          <a>Music</a>
        </div>
        <div className={s.item}>
          <a>Video</a>
        </div>
        <div className={s.item}>
          <a>Message</a>
        </div>
        <div className={s.item} >
          <a>Option</a>
        </div>
      </nav>
    )
}

export default NavBar;