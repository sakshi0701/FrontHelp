import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
    
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                {post.selectedFile}
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
            <button onClick={() => dispatch(likePost(post._id))}>Like &nbsp;{post.likeCount} </button>
            <button onClick={() => dispatch(deletePost(post._id))}>Delete</button><hr />
        </div>
    )
}

export default Post;