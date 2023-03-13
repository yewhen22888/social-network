
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

            return {...state, posts: [newPost, ...state.posts], newPostText: ''}// https://www.youtube.com/watch?v=I8LNJpG60vI&ab_channel=IT-KAMASUTRA як правильно робити
        }
        case PostChange: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.text;
            return {...stateCopy}
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