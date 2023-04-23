import React from "react";
import { connect } from "react-redux";
import axios from 'axios'
import { FollowActionCreator, UnfollowActionCreator, SetUsersActionCreator, SetTotalCount, SetCurrentPage } from './../../Redux/users-reduser'
import UsersComponent from "./UsersComponent";

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
        return <UsersComponent
            TotalCount={this.props.TotalCount}
            PageSize={this.props.PageSize}
            onClickChanged={this.onClickChanged}
            CurrentPage={this.props.CurrentPage}
            UnFollow={this.props.UnFollow}
            Follow={this.props.Follow}
            Users={this.props.Users}
        />

    }
}
let mapStateToProps = (state) => {
    return {
        Users: state.UsersPage.Users,
        TotalCount: state.UsersPage.TotalCount,
        PageSize: state.UsersPage.PageSize,
        CurrentPage: state.UsersPage.CurrentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        Follow: (userId) => {
            dispatch(FollowActionCreator(userId))
        },
        UnFollow: (userId) => {
            dispatch(UnfollowActionCreator(userId))
        },
        SetUsers: (Users) => {
            dispatch(SetUsersActionCreator(Users))
        },
        SetTotalCount: (count) => {
            dispatch(SetTotalCount(count))
        },
        SetCurrentPage: (CurrentPage) => {
            dispatch(SetCurrentPage(CurrentPage))
        }
    }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersPageContainer