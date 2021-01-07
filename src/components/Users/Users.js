import React from 'react';
import User from './../User/User';
import * as axios from 'axios';
import styles from './../../styles/users.module.css'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }
    changedPage(page) {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        console.log(this.props)
        let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize)
        let pages=[]
        for(let i=1; i <= pagesCount;i++) {pages.push(i)}

        return (
            <div className="container flex">
                <h1>Users</h1>
                <div>
                    {pages.map( (page) => {return <button onClick = { () => {this.changedPage(page)}} className={this.props.currentPage === page ? styles.selectedButton : styles.button}>{page}</button>} )}
                </div>
                {
                    this.props.users.map((el) => <User key={el.id} name={el.name} info={el.info} />)
                }
            </div>
        )
    }
}

export default Users 