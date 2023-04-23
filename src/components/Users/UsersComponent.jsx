
import s from './UsersPage.module.css'



const UsersComonent=(props) =>{


let PagesCount = props.TotalCount / props.PageSize

let Page = []
{
    for (let i = 1; i <= Math.ceil(PagesCount); i++) {
        Page.push(i)
    }
}
return <div>
    <div>{Page.map(p => {

        return <span onClick={() => { props.onClickChanged(p) }} className={p == props.CurrentPage ? s.SelectedPage : ''}> {p}</span>
    })}</div>
    {

        props.Users.map(u => {
            return <div className={s.Users_Main} key={u.id}>
                <div className={s.users_wrapper}>
                    <div className={s.ava}>
                        <img src={u.photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzMg1E0cnJn1r_ejy1QDiTo8iZboPPWGDDA&usqp=CAU'} />
                        <div>
                            {u.follow ?
                                <button onClick={() => {
                                    props.UnFollow(u.id)
                                }}>UnFollow</button> :
                                <button onClick={() => {
                                    props.Follow(u.id)
                                }}>Follow</button>}



                        </div>
                    </div>
                    <div className={s.text}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>u.location.city</div>
                        <div>u.location.contry</div>

                    </div>
                </div>
            </div>
        })
    }
</div>
}

export default UsersComonent
