import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { FormLayout, FormTitle, FormInput } from "./styles";
import { ButtonElement } from "../PageStyles/Button";

const Form = ({ currentId, setCurrentId }) => {

    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
      }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
            clear();
        } else {
            dispatch(createPost(postData));
            clear();
        }
    }

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      };

    return (
        <FormLayout onSubmit={handleSubmit}>
            {/* <form onSubmit={handleSubmit}> */}
                <FormTitle>{currentId ? 'Edit the' : 'Create' } post</FormTitle>
                <FormInput type="text"
                    name="creator"
                    placeholder="Creator"
                    label="creator"
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />

                <FormInput type="text"
                    name="title"
                    placeholder="Title"
                    label="title"
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />

                <FormInput type="text"
                    name="message"
                    placeholder="Message"
                    label="message"
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />

                <FormInput type="text"
                    name="tags"
                    placeholder="tags"
                    label="Tags"
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />

                <FileBase type="file" 
                multiple={false}
                onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} 
                />

                <ButtonElement type="submit">Submit</ButtonElement>
            {/* </form> */}
        </FormLayout>
    )
}

export default Form;