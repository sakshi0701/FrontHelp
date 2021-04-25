import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from "../../actions/posts";

const Form = () => {

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h6>Creating a memory</h6>
                <input type="text"
                    name="creator"
                    placeholder="Creator"
                    label="creator"
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />

                <input type="text"
                    name="title"
                    placeholder="Title"
                    label="title"
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />

                <input type="text"
                    name="message"
                    placeholder="Message"
                    label="message"
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />

                <input type="text"
                    name="tags"
                    placeholder="tags"
                    label="tags"
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />

                <FileBase type="file" 
                multiple={false}
                onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} 
                />

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Form;
