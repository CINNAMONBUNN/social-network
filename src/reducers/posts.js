const SET_POST = 'SET_POST'

let initialState = {
    posts:[]
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POST : {
            let newPost = {
                text: action.postText
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        default: return state
    }
}

export const setPostsAC = (postText) => ( {type:SET_POST, postText} )
export default postsReducer