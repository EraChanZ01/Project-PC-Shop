import { combineReducers } from 'redux';
import modalReducer from "./slice/modalSlice"
import userReducer from "./slice/authSlice"
import productReducer from './slice/productSlice'


const rootReducer = combineReducers({
    modalStore: modalReducer,
    userStore: userReducer,
    productStore: productReducer
})

export default rootReducer