const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let InitialState = {
  Users:[{ id: 1, img: "https://hips.hearstapps.com/hmg-prod/images/p90445339-lowres-1638019542.jpg", follow: true, FullName: 'Dimon', status: 'I like Js', location: { contry: 'Belarus', city: 'Minsk' } },
  { id: 2, img: "https://pbs.twimg.com/media/ESUQ8JEU4AArz2x?format=jpg&name=small", follow: false, FullName: 'Maria', status: 'Cook im my life', location: { contry: 'Ukraine', city: 'Kiev' } },
  { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RFoV2uCDKCvJxa08sQzUpCQUNDbwxeN31A&usqp=CAU", follow: false, FullName: 'Illy', status: 'I am Boss', location: { contry: 'France', city: 'Paris' } },
  { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEhms4bd2CScG9sIYWGavVT5wvoJ37Mv5XA&usqp=CAU", follow: true, FullName: 'Vasja', status: 'Stutututu', location: { contry: 'Japan', city: 'Kawasaki' } }]
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
      return { ...state, Users: [...state.Users, ...action.Users] }
    }
    default: return state
  }
}

export const FollowActionCreator = (userId) => ({ type: FOLLOW, userId })

export const UnfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })

export const SetUsersActionCreator = (Users) => ({ type: SET_USERS, Users })


export default UsersPageReducer;