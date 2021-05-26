import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from "../../actions/posts";
import { FormLayout, FormTitle, FormInput } from "../PageStyles/Forms";
import { ButtonElement } from "../PageStyles/Button";

const Form = ({ currentId, setCurrentId }) => {

  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <div>
        <FormTitle style={{color:"#fff"}}>
          Please Sign In to post your experiences and records.
        </FormTitle>
      </div>
    );
  }

  return (
    <FormLayout onSubmit={handleSubmit}>
      {/* <form onSubmit={handleSubmit}> */}
      <FormTitle>{currentId ? 'Edit the' : 'Create'} post</FormTitle>
      <FormInput type="text"
        name="title"
        placeholder="Title"
        label="Title"
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
        placeholder="Tags (coma separated)"
        label="Tags"
        value={postData.tags}
        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
      />

      <div>
      <FileBase type="file"
        multiple={false}
        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
      />
      </div>

      <ButtonElement type="submit">Submit</ButtonElement>
      {/* </form> */}
    </FormLayout>
  )
}

export default Form;