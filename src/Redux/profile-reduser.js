
const POST_CHANGE = 'POST_CHANGE'
const ADD_POST = 'ADD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

let InitialState = {
    posts: [
        { message: "Hi im okay", likeCounts: '12' },
        { message: 'How old are you', likeCounts: '13' },
        { message: 'i love football', likeCounts: '7' },
    ],
    newPostText: '',
    userProfile: null
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
        case SET_USERS_PROFILE: {
            return { ...state, userProfile: { ...action.profile } }
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

export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })



export default ProfilePageReducer;