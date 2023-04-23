import React from "react";
import s from './UsersPage.module.css'
import axios from 'axios'
import { render } from "@testing-library/react";

// let state = [
//     { id: 1, follow: true, name: 'victor', status: 'i love js', location: { city: 'uzhorod', contry: 'ukraine' } },
//     { id: 2, follow: true, name: 'maria', status: 'i banana', location: { city: 'wiena', contry: 'austria' } },
//     { id: 3, follow: false, name: 'andrew', status: 'stutututu', location: { city: 'krakow', contry: 'poland' } }


// ]

class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}`)
            .then(response => {
                this.props.SetUsers(response.data.items)
                this.props.SetTotalCount(response.data.totalCount)
                console.log(response)
            })
    }

    onClickChanged = (CurrentPage) => {
        this.props.SetCurrentPage(CurrentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${CurrentPage}&count=${this.props.PageSize}`)
        .then(response => {
            this.props.SetUsers(response.data.items)
            // this.props.SetTotalCount(response.data.totalCount)
            console.log(response)
        })
    }

    render() {

        let PagesCount = this.props.TotalCount / this.props.PageSize

        let Page = []
        {
            for (let i = 1; i <= Math.ceil(PagesCount); i++) {
                Page.push(i)
            }
        }
        return <div>
            <div>{Page.map(p => {

                return <span onClick={() => { this.onClickChanged(p) }} className={p == this.props.CurrentPage ? s.SelectedPage : ''}> {p}</span>
            })}</div>
            {

                this.props.Users.map(u => {
                    return <div className={s.Users_Main} key={u.id}>
                        <div className={s.users_wrapper}>
                            <div className={s.ava}>
                                <img src={u.photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzMg1E0cnJn1r_ejy1QDiTo8iZboPPWGDDA&usqp=CAU'} />
                                <div>
                                    {u.follow ?
                                        <button onClick={() => {
                                            this.props.UnFollow(u.id)
                                        }}>UnFollow</button> :
                                        <button onClick={() => {
                                            this.props.Follow(u.id)
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
}


export default Users