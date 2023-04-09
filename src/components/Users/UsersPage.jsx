import React from "react";
import s from './UsersPage.module.css'


const UsersPage = (props) => {

    if (props.Users.length === 0) {
        props.SetUsers(
            [{ id: 1, img: "https://hips.hearstapps.com/hmg-prod/images/p90445339-lowres-1638019542.jpg", follow: true, FullName: 'Dimon', status: 'I like Js', location: { contry: 'Belarus', city: 'Minsk' } },
            { id: 2, img: "https://pbs.twimg.com/media/ESUQ8JEU4AArz2x?format=jpg&name=small", follow: false, FullName: 'Maria', status: 'Cook im my life', location: { contry: 'Ukraine', city: 'Kiev' } },
            { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RFoV2uCDKCvJxa08sQzUpCQUNDbwxeN31A&usqp=CAU", follow: false, FullName: 'Illy', status: 'I am Boss', location: { contry: 'France', city: 'Paris' } },
            { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEhms4bd2CScG9sIYWGavVT5wvoJ37Mv5XA&usqp=CAU", follow: true, FullName: 'Vasja', status: 'Stutututu', location: { contry: 'Japan', city: 'Kawasaki' } }]
        )
    }
    return <div>
        {
            props.Users.map(u => {
                return <div className={s.Users_Main} key={u.id}>
                    <div className={s.users_wrapper}>
                        <div className={s.ava}>
                            <img src={u.img}/>
                            <div>
                                {u.follow ?
                                    <button onClick={() => {
                                        u.UnFollow(u.id)
                                    }}>UnFollow</button> :
                                    <button onClick={() => {
                                        u.Follow(u.id)
                                    }}>Follow</button>}

                            </div>
                        </div>
                        <div className={s.text}>
                            <div>{u.FullName}</div>
                            <div>{u.status}</div>
                            <div>{u.location.city}</div>
                            <div>{u.location.contry}</div>

                        </div>
                    </div>
                </div>
            })
        }
    </div>
}


export default UsersPage