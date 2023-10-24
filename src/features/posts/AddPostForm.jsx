import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
// import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  // disbling btn if entries are not entered
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const saveHandler = () => {
    if (title && content) {
      dispatch(
        // got from postsSlice callback fn. (id, title, content)  
        postAdded(
          title,
          content,
          userId)
      )
      // input values are return back to empty after submit entries.
      setTitle("");
      setContent("");
      setUserId("")
    }
  };

  const usersOptionsHandler = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  )) 

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
        <label htmlFor="postAuthor">Author: </label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptionsHandler}
        </select>
        <label htmlFor="postContent">Post Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button 
        type="button" 
        onClick={saveHandler}
        disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
