import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    state = {
        postValue: ''
    }
    setPostText = (e) => {
        this.setState({ postValue: e.target.value })
    }
    render() {
        return (
            <div className="container flex">
                <h1>My posts</h1>
                <div className="d-flex flex-column">
                    <textarea onChange={this.setPostText} value={this.state.postValue}/>
                    <button onClick = {() => {this.props.setPost(this.state.postValue)}} className="btn btn-primary w-25" type="submit">New post</button>
                </div>
                {
                    this.props.posts.map((el) => <Post postText={el.text}/>)
                }
            </div>
        )
    }
}

export default Posts