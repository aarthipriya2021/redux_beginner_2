import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
// import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)


  const saveHandler = () => {
    if (title && content) {
      dispatch(
        postAdded(
          title,
          content)
      )
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Post Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={saveHandler}>Save Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;
