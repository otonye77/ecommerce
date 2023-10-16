import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../Services/Services";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
  
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.products.pending, (state) => {
            console.log("pending");
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchData.products.fulfilled, (state, action) => {
            console.log("fufilled");
            state.data = action.payload
            state.loading = false;
        })
        .addCase(fetchData.products.rejected, (state, action) => {
            console.log("rejected");
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default productSlice.reducer;