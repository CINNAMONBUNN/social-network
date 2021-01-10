import axios from 'axios';
import { connect } from 'react-redux'
import Profile from './Profile';
import React from 'react';
import { setProfileAC } from './../../reducers/profile';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userid}`).then(response => {
            this.props.setProfile(response.data)
        })
    }
    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        aboutMe: state.profileReducer.aboutMe,
        fullName: state.profileReducer.fullName,
        photos: state.profileReducer.photos
    }
}

let WithURLProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, { setProfile: setProfileAC })(WithURLProfileContainer)