import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        data: false,
        error:false,
        loading:false,
        message:false,
        postDetail:false
    },
    reducers: {
        getPosts: (state, action) => {
            state.data = action.payload;
        },addError: (state, action) => {
            state.error = action.payload;
        },addLoading : (state, action) => {
            state.loading = action.payload;
        },addMessage : (state, action) => {
            state.message = action.payload;
        },getPostDetail : (state, action) => {
            state.postDetail = action.payload;
        }
    }
})

export default postSlice.reducer

export const { addError, addMessage ,addLoading ,getPosts,getPostDetail } = postSlice.actions


