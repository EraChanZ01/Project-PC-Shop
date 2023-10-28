import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { changeFavorite } from "./userSlice"
import { openModalLogOn } from './modalSlice'
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
    },
}
export const addProductToFavorite = createAsyncThunk(
    `${NAME_SLICE}/addProductToFavorite`,
    async (payload: any, { rejectWithValue, dispatch }) => {
        try {
            if (payload.userId) {
                const { data } = await restController.addProductToFavorite(payload)
                dispatch(changeFavorite(data))
                return data
            } else {
                dispatch(openModalLogOn())
                return rejectWithValue('not Access token')
            }
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const getProducts = createAsyncThunk(
    `${NAME_SLICE}/getProducts`,
    async (payload: any, { rejectWithValue, getState }: any) => {
        try {
            const userStore = getState().userStore
            const { data } = await restController.getProduct(payload)
            return { userStore, data }
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
        const favoriteProduct = payload.Products[0]
        const newProductList = [...state.productList]
        const candidat = newProductList.find((el: any) => el.id === favoriteProduct.id)
        if (candidat) {
            const index = newProductList.indexOf(candidat)
            if (!payload.delete) {
                candidat.Favorite = [favoriteProduct]
            } else {
                delete candidat.Favorite
            }
            newProductList[index] = candidat
            state.productList = newProductList
            state.isLoading = false
            state.error = null
        }

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
        const favoriteArray = [...payload.userStore.favorite]
        const productListWithFavorite = payload.data.map((el: any) => {
            for (let i = 0; i < favoriteArray.length; i++) {
                if (el.id === favoriteArray[i].productId) {
                    el.Favorite = favoriteArray[i]
                }
            }
            return el
        })
        state.isLoading = false
        state.productList = productListWithFavorite
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