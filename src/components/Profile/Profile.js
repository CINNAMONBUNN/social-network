import React from 'react';
import PostsContainer from './../Posts/PostsContainer';


class Profile extends React.Component {

    render() {
        return (
            <div>
                <h1>Profile</h1>
                <div className = 'd-flex justify-content-center'>
                    <div><img src={require('./../../img/avatar.png').default} /></div>
                    <div className = 'w-25'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </div>
                <PostsContainer/>
            </div>
        )
    }
}

export default Profile