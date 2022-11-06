import s from './Header.module.css'


const Header = () => {
    return (
        <div className={s.header}>
            <header className={s.logo}>
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png' />
                </div>
            </header>
            <header>
                <div>
                    <img className={s.logo2} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/BMW_M_logo.svg/2560px-BMW_M_logo.svg.png' />
                </div>
            </header>

        </div>
    )
}


export default Header;