import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";

import axios from "axios";

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

            console.log(response)
            return response.data;
        } catch (error) {
            console.log("get products error ", error);
        }
    }
);


// export const signUp = createAsyncThunk(
//     "auth/signUp",
//     async ({ datas, navigate }) => {
//       try {
//         const response = await instance.post("api/auth/sign-up", datas);
  
//         if (response.status === 200) {
//             Cookies.set("accessToken", response.data.token);
//             Cookies.set("role", response.data.role);
//             navigate(`/patent`);
//         }
//         return response.data;
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   );
  



const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: [],
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
        // [signUp.pending]: (state, action) => {
        //     state.status = "loading";
        // },
        // [signUp.fulfilled]: (state, action) => {
        //   state.status = "succeeded";
        //   state.user = action.payload
        // },
        // [signUp.rejected]: (state, action) => {
        //   state.status = "failed";
        //   state.error = action.error.message;
        // },
    },
});

export default productSlice.reducer;