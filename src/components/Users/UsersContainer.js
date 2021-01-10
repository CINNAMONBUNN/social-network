import { connect } from 'react-redux'
import { setCurrentPageAC, setUsersAC } from '../../reducers/users';
import Users from './Users';
import { setTotalCountAC } from './../../reducers/users';
import axios from 'axios';
import React from 'react';

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
            console.log(response)
        })
    }

    changedPage = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <Users totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            changedPage={this.changedPage}
            users={this.props.users}
            pageSize={this.props.pageSize}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage
    }
}

export default connect(mapStateToProps, {
                                        setUsers: setUsersAC,
                                        setCurrentPage: setCurrentPageAC,
                                        setTotalCount: setTotalCountAC
                                        }
)(UsersContainer)
