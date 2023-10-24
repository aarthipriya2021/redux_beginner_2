import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: "Learn HTML",
        content:'Please Like, Share and Subscribe!'
    },
    {
        id: '2',
        title: "Learn CSS",
        content:'Like, Share, Commment and Subscribe!'
    }
]
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        postAdded: {
            reducer(state, action){
            state.push(action.payload)
        },
        prepare(title, content){
            return{
                payload: {
                    id: nanoid(),
                    title,
                    content
                }
            }
        }
    }
    }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions;
export default postsSlice.reducer