import React from 'react';
import User from './../User/User';
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            console.log(response)
            console.log(this.props)
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return (
            <div className="container flex">
                <h1>Users</h1>
                {
                    this.props.users.map((el) => <User key={el.id} name={el.name} info={el.info} />)
                }
            </div>
        )
    }
}

export default Users