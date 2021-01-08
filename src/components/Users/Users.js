import React from 'react';
import User from './../User/User';
import styles from './../../styles/users.module.css'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }

    return (
        <div className="container flex">
            <h1>Users</h1>
            <div>
                {pages.map((page) => { return <button onClick={() => { props.changedPage(page) }} className={props.currentPage === page ? styles.selectedButton : styles.button}>{page}</button> })}
            </div>
            {
                props.users.map((el) => <User key={el.id} name={el.name} info={el.info} />)
            }
        </div>
    )
}
export default Users 