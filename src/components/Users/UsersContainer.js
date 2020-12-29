import { connect } from 'react-redux'
import { setUsersAC } from '../../reducers/users';
import Users from './Users';


const mapStateToProps = (state) => {
    console.log(state.usersReducer)
    return {
        users: state.usersReducer.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => { dispatch(setUsersAC(users)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;