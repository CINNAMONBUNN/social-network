import React from 'react';

const User = (props) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src="#" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {props.name} </h5>
                    <p className="card-text"> {props.info} </p>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link">Check profile</a>
                    <button type="button" className="btn btn-outline-success">Add friend</button>
                </div>
            </div>
        </div>
    )
}

export default User