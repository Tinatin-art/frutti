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


export const getProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        try {
            const response = await axiosInstance.get("fruits");

            return response.data;
        } catch (error) {
            console.log("get products error ", error);
        }
    }
);

export const getProductFilter = createAsyncThunk(
    "products/getProductFilter",
    async () => {
        try {
            const response = await axiosInstance.get("filters");

            return response.data;
        } catch (error) {
            console.log("get product filter error ", error);
        }
    }
);

export const getProductByID = createAsyncThunk(
    "products/getProductByID",
    async (id) => {
        try {
            const response = await axiosInstance.get(`fruits/${id}`);

            return response.data;
        } catch (error) {
            console.log("get product by id error ", error);
        }
    }
);

export const updateRate = createAsyncThunk(
    "products/updateRate",
    async ({id, newRate}) => {
        try {
            const response = await axiosInstance.patch(`fruits/${id}`, JSON.stringify(newRate));

            return response.data;
        } catch (error) {
            console.log("update rate error ", error);
        }
    }
);

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: [],
        productFilter: [],
        productByID: [],
        status: "idle",
        error: null,
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = "loading";
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.products = action.payload
        },
        [getProducts.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [getProductFilter.pending]: (state, action) => {
            state.status = "loading";
        },
        [getProductFilter.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.productFilter = action.payload
        },
        [getProductFilter.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [getProductByID.pending]: (state, action) => {
            state.status = "loading";
        },
        [getProductByID.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.productByID = action.payload
        },
        [getProductByID.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [updateRate.pending]: (state, action) => {
            state.status = "loading";
        },
        [updateRate.fulfilled]: (state, action) => {
            state.status = "succeeded";
        },
        [updateRate.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export default productSlice.reducer;