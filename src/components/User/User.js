import React from 'react';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {props.name} </h5>
                    <p className="card-text"> {props.info} </p>
                </div>
                <div className="card-body">
                    <NavLink to={`/profile/${props.id}`} className="card-link">Check profile</NavLink>
                    <button type="button" className="btn btn-outline-success">Add friend</button>
                </div>
            </div>
        </div>
    )
}

export default User