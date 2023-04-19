import React from "react";
import s from './UsersPage.module.css'
import axios from 'axios'

// let state = [
//     { id: 1, follow: true, name: 'victor', status: 'i love js', location: { city: 'uzhorod', contry: 'ukraine' } },
//     { id: 2, follow: true, name: 'maria', status: 'i banana', location: { city: 'wiena', contry: 'austria' } },
//     { id: 3, follow: false, name: 'andrew', status: 'stutututu', location: { city: 'krakow', contry: 'poland' } }


// ]

const UsersPage = (props) => {
    let Setusers = () => {
        if (props.Users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.SetUsers(response.data.items)
                    console.log(response)
                })
        }
    }
  
    return <div>
        {props.Users.length == 0 ? <button onClick={Setusers}>tap me to get users</button> :null }
        {
            props.Users.map(u => {
                return <div className={s.Users_Main} key={u.id}>
                    <div className={s.users_wrapper}>
                        <div className={s.ava}>
                            <img src='https://hips.hearstapps.com/hmg-prod/images/p90445339-lowres-1638019542.jpg' />
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


export default UsersPage