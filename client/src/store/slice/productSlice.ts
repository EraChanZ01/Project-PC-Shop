import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as restController from "../../API/rest"

const NAME_SLICE = "productSlice"

const initialState = {
    isLoading: false
}
const reducers = {

}
export const getProducts = createAsyncThunk(
    `${NAME_SLICE}/getProducts`,
    async (payload: any, { rejectWithValue }) => {
        try {
            const { data } = await restController.getProduct(payload)
            return data
        } catch (e) {
            return rejectWithValue(e)
        }

    }
)

const extraReducers = (builder: any) => {
    builder.addCase(getProducts.pending, (state: any) => {
        state.isLoading = true
        state.error = null
    })
    builder.addCase(getProducts.fulfilled, (state: any, { payload }: any) => {
        state.isLoading = false
        state.productList = payload
        state.error = null
    })
    builder.addCase(getProducts.rejected, (state: any, { payload }: any) => {
        state.isLoading = false
        state.error = payload
    })
}

const productSlice = createSlice({
    name: NAME_SLICE,
    initialState,
    reducers,
    extraReducers

})

const { actions, reducer } = productSlice

export default reducer