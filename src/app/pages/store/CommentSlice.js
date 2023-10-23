import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";

import axios from "axios";

// Это временная api для db json-server
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3003/',
    headers: {
        "Content-Type": "application/json",
    }
});


export const getComments = createAsyncThunk(
    "comments/getComments",
    async () => {
        try {
            const response = await axiosInstance.get("comments/");

            return response.data;
        } catch (error) {
            console.log("get comments error ", error);
        }
    }
);

export const deleteComment = createAsyncThunk(
    "comments/deleteComment",
    async (id) => {
        try {
            const response = await axiosInstance.delete(`comments/${id}`);

            return response.data;
        } catch (error) {
            console.log("delete comment error ", error);
        }
    }
);


export const createComment = createAsyncThunk(
    "comments/createComment",
    async (newComment) => {
        try {
            const response = await axiosInstance.post(`comments/`, JSON.stringify(newComment));

            return response.data;
        } catch (error) {
            console.log("create comment error ", error);
        }
    }
);

export const updateComment = createAsyncThunk(
    "comments/updateComment",
    async ({newComment, id}) => {
        try {
            const response = await axiosInstance.patch(`comments/${id}`, JSON.stringify(newComment));

            return response.data;
        } catch (error) {
            console.log("update comment error ", error);
        }
    }
);


export const patchLike = createAsyncThunk(
    "comments/patchLike",
    async ({newComment, id}) => {
        try {
            const response = await axiosInstance.patch(`comments/${id}`, JSON.stringify(newComment));

            return response.data;
        } catch (error) {
            console.log("patch like error ", error);
        }
    }
);





const commentSlice = createSlice({
    name: "commentSlice",
    initialState: {
        comments: [],
        deleteComment: {},
        addComment: {},
        isLikes: false,
        status: "idle",
        error: null,
    },
    extraReducers: {
        [getComments.pending]: (state, action) => {
            state.status = "loading";
        },
        [getComments.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.comments = action.payload
        },
        [getComments.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [deleteComment.pending]: (state, action) => {
            state.status = "loading";
        },
        [deleteComment.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.deleteComment = action.payload
        },
        [deleteComment.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [createComment.pending]: (state, action) => {
            state.status = "loading";
        },
        [createComment.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.addComment = action.payload
        },
        [createComment.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [updateComment.pending]: (state, action) => {
            state.status = "loading";
        },
        [updateComment.fulfilled]: (state, action) => {
            state.status = "succeeded";
        },
        [updateComment.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [patchLike.pending]: (state, action) => {
            state.status = "loading";
        },
        [patchLike.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.isLikes = action.payload
        },
        [patchLike.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export default commentSlice.reducer;