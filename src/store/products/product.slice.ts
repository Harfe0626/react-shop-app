import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "./products.type";

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async (id: number, thunkAPI) => {
        try {
            const response = await axios.get<IProduct>(
                `https://fakestoreapi.com/products/${id}`
            )

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Error loading product");
        }
    }
)

type ProductType = {
    product: IProduct;
    isLoading: boolean;
    error: string;
}

const initialState: ProductType = {
    product: {} as IProduct,
    isLoading: false,
    error: ""
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.product = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
})

export default productSlice.reducer;