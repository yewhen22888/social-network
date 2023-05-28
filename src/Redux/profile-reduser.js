
const POST_CHANGE = 'POST_CHANGE'
const ADD_POST = 'ADD_POST'
const SET_USERS = 'SET_USERS'

let InitialState = {
    posts: [
        { message: "Hi im okay", likeCounts: '12' },
        { message: 'How old are you', likeCounts: '13' },
        { message: 'i love football', likeCounts: '7' },
    ],
    newPostText: '',
    data: null
}



const ProfilePageReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                likeCounts: 0
            }

            return { ...state, posts: [...state.posts, newPost], newPostText: '' }
        }
        case POST_CHANGE: {

            return { ...state, newPostText: action.text }
        }
        case SET_USERS: {
            let stateCopy ={...state, data: {...action.data}}
            console.log(stateCopy)
            return { stateCopy }
        }
        default:
            return state
    }
}

export const onPostChangeActionCreator = (text) => {
    return {
        type: POST_CHANGE, text
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })


export const SetUsersProfile = (data) => ({ type: SET_USERS, data })


export default ProfilePageReducer;