import { connect } from 'react-redux'
import { setCurrentPageAC, setUsersAC } from '../../reducers/users';
import Users from './Users';
import { setTotalCountAC } from './../../reducers/users';


const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) },
        setTotalCount: (totalCount) => { dispatch(setTotalCountAC(totalCount)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;