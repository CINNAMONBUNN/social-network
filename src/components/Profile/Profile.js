import React from 'react';
import PostsContainer from './../Posts/PostsContainer';


class Profile extends React.Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <div className = 'd-flex flex-column justify-content-center'>
                    <div><img src={!this.props.photos ? require('./../../img/avatar.png').default : this.props.photos.small} /></div>
                    <span>{this.props.fullName}</span>    
                    <span>{this.props.aboutMe}</span>
                </div>
                <PostsContainer/>
            </div>
        )
    }
}

export default Profile