const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS='SET_USERS'

let InitialState = {
  Users:
    [{ id: 1, follow: true, FullName: 'Dimon', status: 'I like Js', location: { contry: 'Belarus', city: 'Minsk' } },
    { id: 2, follow: false, FullName: 'Maria', status: 'Cook im my life', location: { contry: 'Ukraine', city: 'Kiev' } },
    { id: 3, follow: false, FullName: 'Illy', status: 'I am Boss', location: { contry: 'France', city: 'Paris' } },
    { id: 4, follow: true, FullName: 'Vasja', status: 'Stutututu', location: { contry: 'Japan', city: 'Kawasaki' } }]

}

const DialogsPageReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state, Users:
          state.Users.map(u => {
            if (u.id === action.userId) {
              return { ...u, follow: true }
            }
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
          })
      }
    }
    case SetUsers: {
      return { ...state, Users: [state.Users, action.Users] }
    }
    default: return state
  }
}

export const FollowCreator = (userId) => ({ type: FOLLOW, userId })

export const UnfollowCreator = (userId) => ({ type: UNFOLLOW, userId })
export const SetUsers = (Users) => ({type:SET_USERS ,Users})


export default DialogsPageReducer;