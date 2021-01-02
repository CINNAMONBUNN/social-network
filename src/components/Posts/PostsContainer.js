import { connect } from 'react-redux'
import Posts from './Posts';
import { setPostsAC } from './../../reducers/posts';

const mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPost: (postText) => {
            dispatch(setPostsAC(postText))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer;