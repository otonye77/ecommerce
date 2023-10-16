import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../api/api";

export const fetchData = {
    products:createAsyncThunk(
        'fetchProducts',
        async () => {
            const response = await axios.get(api.products);
            return response.data;
        }
    )
}   