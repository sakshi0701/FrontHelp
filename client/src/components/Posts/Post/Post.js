import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from "../../../actions/posts";
import { AiOutlineEdit, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { MdDelete } from 'react-icons/md';
import { CardLayout } from "../../PageStyles/Cards";
import { ButtonElement } from "../../PageStyles/Button";
import { PostCreator, PostDate, PostTitle, PostTag, PostMessage } from "../../PageStyles/Heading";

const Post = ({ post, setCurrentId }) => {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><AiFillLike />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><AiOutlineLike />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }
        return <><AiOutlineLike />&nbsp;Like</>;
    };

    return (
        <CardLayout style={{ maxWidth: "55vh" }}>
            <PostCreator>By -{post.creator}</PostCreator>
            <PostDate>{moment(post.createdAt).fromNow()}</PostDate>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                <div>
                    <ButtonElement onClick={() => setCurrentId(post._id)} style={{ color: 'white' }}>
                        <AiOutlineEdit />
                    </ButtonElement>
                </div>
            )}
            <PostTag>{post.tags.map((tag) => `#${tag} `)}</PostTag>
            <PostTitle>{post.title}</PostTitle>
            <PostMessage>{post.message}</PostMessage>
            <ButtonElement style={{ width: "40%" }} disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}><Likes /> &nbsp;</ButtonElement>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                <ButtonElement style={{ background: "orange", width: "30%" }} onClick={() => dispatch(deletePost(post._id))}>
                    <MdDelete />
                </ButtonElement>
            )}
        </CardLayout>
    )
}

export default Post;