const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let InitialState = {
  Users: [],
  TotalCount: '0',
  PageSize: '5',
  CurrentPage: '1'
}

const UsersPageReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state, Users:
          state.Users.map(u => {
            if (u.id === action.userId) {
              return { ...u, follow: true }
            }
            return u;
          })
      }
    }
    case UNFOLLOW: {
      return {
        ...state, Users:
          state.Users.map(u => {
            if (u.id === action.userId) {
              return { ...u, follow: false }
            }
            return u;
          })
      }
    }
    case SET_USERS: {
      return { ...state, Users: [...action.Users] }
    }
    case SET_TOTAL_COUNT: {
      debugger;
      return { ...state, TotalCount: action.count }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, CurrentPage: action.CurrentPage }
    }
    default: return state
  }
}

export const FollowActionCreator = (userId) => ({ type: FOLLOW, userId })

export const UnfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })

export const SetUsersActionCreator = (Users) => ({ type: SET_USERS, Users })

export const SetTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count })

export const SetCurrentPage = (CurrentPage) => ({ type: SET_CURRENT_PAGE, CurrentPage })


export default UsersPageReducer;