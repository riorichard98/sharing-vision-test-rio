import { addError, addMessage ,addLoading ,getPosts,getPostDetail } from './postSlice'
import axios from 'axios'
const API_URL = "http://localhost:3000/article";

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
        const status = data.status ? `?status=${data.status}` : ''
        dispatch(addLoading(true))
        const response = await axios.get(`${API_URL}/${data.limit}/${data.offset}${status}`);
        dispatch(getPosts(response.data));
    } catch (error) {
        console.log(error);
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