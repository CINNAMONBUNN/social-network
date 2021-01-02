import React from 'react';

const Post = (props) => {
    return (
        <div>
            <div className="card mt-4 mb-4">
                <div className="card-body">
                    <p>This is some text within a card body.</p>
                    <p>{props.postText}</p>
                </div>
            </div>
        </div>
    )
}

export default Post