
const PostChange = 'POST-CHANGE'
const AddPost = 'ADD-POST'

const ProfilePageReduser = (state, action) => {

    switch (action.type) {
        case AddPost:
            let newPost = {
                message: state.newPostText,
                likeCounts: 0
            }
            state.posts.push(newPost);
            state.newPostText = ' ';
            return state
        case PostChange:
            state.newPostText = action.textt;
            return state
        default:
            return state
    }
}

export const onPostChangeActionCreator = (text) => {
    return {
        type: PostChange, textt: text
    }
}

export const addPostActionCreator = () => {
    return {
        type: AddPost
    }
}

export default ProfilePageReduser;