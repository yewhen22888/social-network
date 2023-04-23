import React from "react";
import { connect } from "react-redux";
import Users from "./UsersPage Class";
import { FollowActionCreator, UnfollowActionCreator, SetUsersActionCreator, SetTotalCount ,SetCurrentPage} from './../../Redux/users-reduser'

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
        SetCurrentPage:(CurrentPage) => {
            dispatch(SetCurrentPage(CurrentPage))
        }
    }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersPageContainer