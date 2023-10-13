import { createSlice } from '@reduxjs/toolkit';

const SLICE_NAME = 'modalSlice'

interface IinitialState {
    modalRegister: boolean
    modalLogOn: boolean
}
interface IPath {
    path: string
}

const initialState: IinitialState = {
    modalRegister: false,
    modalLogOn: false
}



const reducers = {
    openModalRegister: (state: any,): void => {
        state.modalRegister = true
        const page = document.querySelector('.page') as HTMLElement
        const modal = document.querySelector("#Register") as HTMLElement
        page.style.filter = "contrast(30%)"
        modal.style.visibility = 'visible'
    },
    exitModalRegister: (state: any): void => {
        state.modalRegister = false
        const page = document.querySelector('.page') as HTMLElement
        const modal = document.querySelector("#Register") as HTMLElement
        page.style.filter = "contrast(100%)"
        modal.style.visibility = 'hidden'
    },
    openModalLogOn: (state: any): void => {
        state.modalRegister = true
        const page = document.querySelector('.page') as HTMLElement
        const modal = document.querySelector("#LogOn") as HTMLElement
        page.style.filter = "contrast(30%)"
        modal.style.visibility = 'visible'
    },
    exitModalLogOn: (state: any): void => {
        state.modalRegister = false
        const page = document.querySelector('.page') as HTMLElement
        const modal = document.querySelector("#LogOn") as HTMLElement
        page.style.filter = "contrast(100%)"
        modal.style.visibility = 'hidden'
    }
}

const modalSlice = createSlice({
    name: `${SLICE_NAME}`,
    initialState,
    reducers,
});

const { actions, reducer } = modalSlice

export const { openModalRegister, exitModalRegister, openModalLogOn, exitModalLogOn } = actions

export default reducer