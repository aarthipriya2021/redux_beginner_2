import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: '1',
        title: "Learn HTML",
        content:'Please Like, Share and Subscribe!',
        date: sub(new Date(), { minutes: 10 }).toISOString()
    },
    {
        id: '2',
        title: "Learn CSS",
        content:'Like, Share, Commment and Subscribe!',
        date: sub(new Date(),{ minutes:5}).toISOString()
    }
]
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        // reducer fn, that;s why denote as "reducer"
        postAdded: {
            reducer(state, action){
            state.push(action.payload)
        },
        // "prepare" can make code more concise and more handy for timestamps, default values and other modificationsof the payload. (derived from reducer)
        prepare(title, content, userId){
            return{
                payload: {
                    id: nanoid(),
                    title,
                    content, 
                    date: new Date().toISOString(),
                    userId,
                }
            }
        }
    }
    }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions;
export default postsSlice.reducer