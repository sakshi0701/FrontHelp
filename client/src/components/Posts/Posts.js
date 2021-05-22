import React from 'react';
import Post from './Post/Post';
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    
    console.log(posts);
    
    return (
        <div>
            <h1>Posts</h1>
            <div>
                {posts.map((post) => (
                    <div>
                        key = {post._id}
                        <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Posts
