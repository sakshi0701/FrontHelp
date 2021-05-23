import React from 'react';
import Post from './Post/Post';
import { useSelector } from "react-redux";
import { Cards } from "../../components/PageStyles/Cards";

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    
    console.log(posts);
    
    return (
        <Cards style={{ margin: "9px", maxWidth: "90vh" }}>
            <div>
                {posts.map((post) => (
                    <div>
                        <Post key = {post._id} post={post} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        </Cards>
    )
}

export default Posts
