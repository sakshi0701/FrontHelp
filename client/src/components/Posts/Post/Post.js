import React from 'react';
import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
    return (
        <div>
            <div>
                image={post.selectedFile}
                title={post.title}
            </div>
            <div>
                <h5>{post.creator}</h5>
                <h6>{moment(post.createdAt).fromNow()}</h6>
            </div>
            <div>
                <button onClick={() => setCurrentId(post._id)}>Edit</button>
            </div>
            <div>
                {post.tags.map((tag) => `#${tag} `)}
            </div>
            <h3>{post.title}</h3>
            <h5>{post.message}</h5>
            <button onClick={() => {}}>Like {post.likeCount} </button>
            <button onClick={() => {}}>Delete</button><hr />
        </div>
    )
}

export default Post
