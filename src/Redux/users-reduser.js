const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let InitialState = {
  Users:[]
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
      let Newstate =  { ...state, Users: [...state.Users, ...action.Users] }
      debugger
      console.log(state)
      return Newstate
    }
    default: return state
  }
}

export const FollowActionCreator = (userId) => ({ type: FOLLOW, userId })

export const UnfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })

export const SetUsersActionCreator = (Users) => ({ type: SET_USERS, Users })


export default UsersPageReducer;