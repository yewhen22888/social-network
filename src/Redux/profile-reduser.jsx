
const PostChange = 'POST-CHANGE'
const AddPost = 'ADD-POST'

let InitialState = {
    posts: [
        { message: "Hi im okay", likeCounts: '12' },
        { message: 'How old are you', likeCounts: '13' },
        { message: 'i love football', likeCounts: '7' },
    ],
    newPostText: ''
}



const ProfilePageReducer = (state = InitialState, action) => {
    switch (action.type) {
        case AddPost: {
            let newPost = {
                message: state.newPostText,
                likeCounts: 0
            }


            return { ...state, posts: { ...state.posts, newPost }, newPostText: '' }
        }
        case PostChange: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.textt;
            return stateCopy
        }
        default:
            return state
    }
}

export const onPostChangeActionCreator = (text) => {
    return {
        type: PostChange, text: text
    }
}

export const addPostActionCreator = () => {
    return {
        type: AddPost
    }
}

export default ProfilePageReducer;