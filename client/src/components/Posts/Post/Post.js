import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from "../../../actions/posts";
import { AiOutlineEdit, AiOutlineLike } from "react-icons/ai";
import { MdDelete } from 'react-icons/md';
import { CardLayout } from "../../PageStyles/Cards";
import { ButtonElement } from "../../PageStyles/Button";
import { PostCreator, PostDate, PostTitle, PostTag, PostMessage } from "../../PageStyles/Heading";

const Post = ({ key, post, setCurrentId }) => {

    const dispatch = useDispatch();

    return (
        <CardLayout style={{ maxWidth: "55vh" }}>
            <ButtonElement style={{ width: "18%" }} onClick={() => setCurrentId(post._id)}><AiOutlineEdit /></ButtonElement>
            <PostCreator>By -{post.creator}</PostCreator>
            <PostDate>{moment(post.createdAt).fromNow()}</PostDate>
            <PostTag>{post.tags.map((tag) => `#${tag} `)}</PostTag>
            <PostTitle>{post.title}</PostTitle>
            <PostMessage>{post.message}</PostMessage>
            <ButtonElement style={{ width: "40%" }} onClick={() => dispatch(likePost(post._id))}><AiOutlineLike /> &nbsp;{post.likeCount} </ButtonElement>
            <ButtonElement style={{ background: "orange", width: "30%" }} onClick={() => dispatch(deletePost(post._id))}><MdDelete style={{ color: "black" }} /></ButtonElement><hr />
        </CardLayout>
    )
}

export default Post;