import React from "react";
import { connect } from "react-redux";
import Users from "./UsersPage Class";
import { FollowActionCreator, UnfollowActionCreator,SetUsersActionCreator } from './../../Redux/users-reduser'

let mapStateToProps = (state) => {
    return {
        Users: state.UsersPage .Users
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
        }
    }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersPageContainer