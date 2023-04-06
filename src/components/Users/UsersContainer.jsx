import { connect } from "react-redux";
import UsersPage from "./UsersPage";
import { FollowActionCreator, UnfollowActionCreator,SetUsersActionCreator } from './../../Redux/users-reduser'

let mapStateToProps = (state) => {
    return {
        Users: state.UsersPage.Users
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

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage)

export default UsersPageContainer