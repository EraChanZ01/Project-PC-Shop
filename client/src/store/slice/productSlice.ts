import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { changeFavorite } from "./userSlice"
import * as restController from "../../API/rest"
import CONSTANTS from '../../constants'

const NAME_SLICE = "productSlice"

const initialState = {
    isLoading: false,
    productList: [],
    order: CONSTANTS.CREATED_AT_DESC
}
const reducers = {
    changeOrder: (state: any, { payload }: any) => {
        if (payload === CONSTANTS.PRICE_DESC) {
            state.productList = state.productList.sort((a: any, b: any) => {
                if (a.price > b.price) return -1
                else return 1
            })
            state.order = CONSTANTS.PRICE_DESC
        }
        else if (payload === CONSTANTS.PRICE_ASC) {
            state.productList = state.productList.sort((a: any, b: any) => {
                if (a.price < b.price) return -1
                else return 1
            })
            state.order = CONSTANTS.PRICE_ASC
        }
        else if (payload === CONSTANTS.CREATED_AT_DESC) {
            state.productList = state.productList.sort((a: any, b: any) => {
                if (a.createdAt > b.createdAt) return -1
                else return 1
            })
            state.order = CONSTANTS.CREATED_AT_DESC
        }
    }
}
export const addProductToFavorite = createAsyncThunk(
    `${NAME_SLICE}/addProductToFavorite`,
    async (payload: any, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await restController.addProductToFavorite(payload)
            dispatch(changeFavorite(data))
            return data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

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
    builder.addCase(addProductToFavorite.pending, (state: any) => {
        state.isLoading = true
        state.error = null
    })
    builder.addCase(addProductToFavorite.fulfilled, (state: any, { payload }: any) => {
        state.isLoading = false
        state.error = null
    })
    builder.addCase(addProductToFavorite.rejected, (state: any, { payload }: any) => {
        state.isLoading = false
        state.error = payload
    })
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

export const { changeOrder } = actions

export default reducer