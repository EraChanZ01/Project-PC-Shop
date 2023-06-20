import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { exitModalRegister, exitModalLogOn } from './modalSlice'
import * as restController from "../../API/rest"

const SLICE_NAME = 'authSlice'

const initialState = {
    isLoading: false,
}
const reducers = {

}
export const checkAuth = createAsyncThunk(
    `${SLICE_NAME}/checkAuth`,
    async (payload, { rejectWithValue }) => {
        try {
            const { data }: any = await restController.checkAuth()
            return data
        } catch (e) {
            return rejectWithValue({
                message: "Failed to fetch"
            })
        }
    }
)

export const registerUser = createAsyncThunk(
    `${SLICE_NAME}/registerUser`,
    async (payload: any, { rejectWithValue, dispatch }) => {
        try {
            const { data }: any = await restController.registerUser(payload)
            dispatch(exitModalRegister())
            return data
        } catch (e) {
            return rejectWithValue({
                message: "Failed to fetch"
            })
        }
    }
)

export const loginUser = createAsyncThunk(
    `${SLICE_NAME}/loginUser`,
    async (payload: any, { rejectWithValue, dispatch }) => {
        try {
            const { data }: any = await restController.loginUser(payload)
            dispatch(exitModalLogOn())
            return data
        } catch (e) {
            return rejectWithValue({
                message: "Failed to fetch"
            })
        }
    }
)


const extraReducers = (builder: any) => {
    builder.addCase(registerUser.pending, (state: any) => {
        state.isLoading = true
    })
    builder.addCase(registerUser.fulfilled, (state: any, { payload }: any) => {
        state.isLoading = false
        state.data = payload
        state.error = null

    })
    builder.addCase(registerUser.rejected, (state: any, { payload }: any) => {
        state.isLoading = false
        state.error = payload
    })
    builder.addCase(loginUser.pending, (state: any) => {
        state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state: any, { payload }: any) => {
        state.isLoading = false
        state.data = payload
        state.error = null

    })
    builder.addCase(loginUser.rejected, (state: any, { payload }: any) => {
        state.isLoading = false
        state.error = payload
    })
    builder.addCase(checkAuth.pending, (state: any) => {
        state.isLoading = true
    })
    builder.addCase(checkAuth.fulfilled, (state: any, { payload }: any) => {
        state.isLoading = false
        state.data = payload
        state.error = null

    })
    builder.addCase(checkAuth.rejected, (state: any, { payload }: any) => {
        state.isLoading = false
        state.error = payload
    })
}

const аuthSlice = createSlice({
    name: `${SLICE_NAME}`,
    initialState,
    reducers,
    extraReducers
})

const { actions, reducer } = аuthSlice

export const { } = actions
export default reducer

