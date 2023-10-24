import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: "Virat"},
    {id: '1', name: "Dhoni"},
    {id: '2', name: "Hardik"},

]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{

    }
})

export const selectAllUsers = state => state.users;

export default usersSlice.reducer;