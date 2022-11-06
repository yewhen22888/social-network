import s from'./Header.module.css'


const Header = () => {
return (
    <div>
    <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png' />
    </header>
    <div>
        <img src='https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/topics/fascination-bmw/bmw-m-logo-and-colors/bmw-m-logo-and-colors.jpg' /
    </div>
    </div>
)
}


export default Header;