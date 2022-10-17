import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "http://localhost:3000/article";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        data: [],
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

export const addPostAsync = (data) => async (dispatch) => {
    try {
        dispatch(addLoading(true))
        const response = await axios.post(API_URL, data);
        dispatch(addMessage(response.data.message));
    } catch (error) {
        if(error.type === 'known'){
            dispatch(addError(error.message))
        }else{
            dispatch(addError(error.response.data.message))
        }
    } finally {
        dispatch(addLoading(false))
    }
}

export const getPostAsync = (data) => async (dispatch) => {
    try {
        dispatch(addLoading(true))
        const response = await axios.get(`${API_URL}/${data.limit}/${data.offset}`);
        dispatch(getPost(response.data));
    } catch (error) {
        dispatch(addError(error.response.data.message))
    }finally {
        dispatch(addLoading(false))
    }
}

export const getPostDetailAsync = (id) => async (dispatch) => {
    try {
        dispatch(addLoading(true))
        const response = await axios.get(`${API_URL}/${id}`);
        dispatch(getPostDetail(response.data));
    } catch (error) {
        dispatch(addError(error.response.data.message))
    }finally {
        dispatch(addLoading(false))
    }
}

export const deletePostAsync = (id) => async (dispatch) => {
    try {
        dispatch(addLoading(true))
        const response = await axios.delete(`${API_URL}/${id}`);
        dispatch(addMessage(response.data.message));
    } catch (error) {
        dispatch(addError(error.response.data.message))
    } finally {
        dispatch(addLoading(false))
    }
}

export const updatePostAsync = (data,id) => async (dispatch) => {
    try {
        const response = await axios.post(API_URL, data);
        dispatch(addMessage(response.data.message));
    } catch (error) {
        dispatch(addError(error.response.data.message))
    } finally {
        dispatch(addLoading(false))
    }
}


export default postSlice.reducer

export const { addError, addMessage } = postSlice.actions