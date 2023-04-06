import React from "react";
import s from './UsersPage.module.css'

const UsersPage = (props) => {
    return <div >
        {
            props.Users.map(u => <div className={s.users_wrapper}>
                
                <img src="https://hips.hearstapps.com/hmg-prod/images/p90445339-lowres-1638019542.jpg" alt="" />
                <div className={s.Button}>
                    {u.follow ?
                        <button onClick={props.follow(u.id)}>Unfollow</button> :
                        <button onClick={props.UnFollow(u.id)} >Follow</button>}

                </div>

            </div>)
        }
    </div>
}


export default UsersPage