import React from 'react';
import Post from './Post/Post';
import { useSelector } from "react-redux";
import { Cards } from "../../components/PageStyles/Cards";
import { Heading } from '../PageStyles/Heading';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    
    return (
        <>
        <Heading>Your Posts</Heading>
        <Cards>
            <div>
                {posts.map((post) => (
                    <div key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        </Cards>
        </>
    );
};

export default Posts;