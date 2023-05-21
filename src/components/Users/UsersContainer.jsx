import React from "react";
import { connect } from "react-redux";
import axios from 'axios'
import { Follow, Unfollow, SetUsers, SetTotalCount, SetCurrentPage,ToggleIsFetching } from './../../Redux/users-reduser'
import UsersComponent from "./UsersComponent";
import Preloader from "./../Common/Preloader.gif"

class Users extends React.Component {


    componentDidMount() {
        this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}`)
            .then(response => {
                this.props.SetUsers(response.data.items)
                this.props.SetTotalCount(response.data.totalCount)
                this.props.ToggleIsFetching(false)
                console.log(response)
            })
    }

    onClickChanged = (CurrentPage) => {
        this.props.ToggleIsFetching(true)
        this.props.SetCurrentPage(CurrentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${CurrentPage}&count=${this.props.PageSize}`)
            .then(response => {
                this.props.SetUsers(response.data.items)
                // this.props.SetTotalCount(response.data.totalCount)
                this.props.ToggleIsFetching(false)
                console.log(response)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={Preloader} /> : null}
            <UsersComponent
                TotalCount={this.props.TotalCount}
                PageSize={this.props.PageSize}
                onClickChanged={this.onClickChanged}
                CurrentPage={this.props.CurrentPage}
                Unfollow={this.props.Unfollow}
                Follow={this.props.Follow}
                Users={this.props.Users}
            />
        </>

    }
}
let mapStateToProps = (state) => {
    return {
        Users: state.UsersPage.Users,
        TotalCount: state.UsersPage.TotalCount,
        PageSize: state.UsersPage.PageSize,
        CurrentPage: state.UsersPage.CurrentPage,
        isFetching:state.UsersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         Follow: (userId) => {
//             dispatch(FollowActionCreator(userId))
//         },
//         UnFollow: (userId) => {
//             dispatch(UnfollowActionCreator(userId))
//         },
//         SetUsers: (Users) => {
//             dispatch(SetUsersActionCreator(Users))
//         },
//         SetTotalCount: (count) => {
//             dispatch(SetTotalCount(count))
//         },
//         SetCurrentPage: (CurrentPage) => {
//             dispatch(SetCurrentPage(CurrentPage))
//         },
//         ToggleIsFetching:(isFetching)=>{
//             dispatch(ToggleIsFetchingAC(isFetching))
//         }
//     }
// }

const UsersPageContainer = connect(mapStateToProps,{
      Follow,Unfollow,SetUsers,SetTotalCount,SetCurrentPage,ToggleIsFetching})(Users)

export default UsersPageContainer