import React from "react";
import s from './UsersPage.module.css'

const UsersPage = (props) => {
    debugger;
    return <div >
        {
            props.Users.map(u => <div key={u.id} className={s.users_wrapper}>

                <img src={u.img} />

                <div>{u.FullName}</div>
                <div>{u.status}</div>
                <div>{u.location.city}</div>
                <div>{u.location.contry}</div>

                <div >
                    {u.follow ?
                        <button onClick={() => { props.UnFollow(u.id) }}>UnFollow</button> :
                        <button onClick={() => { props.Follow(u.id) }} >Follow</button>}

                </div>

            </div>)
        }
    </div>
}


export default UsersPage