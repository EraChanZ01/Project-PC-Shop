import { combineReducers } from 'redux';
import modalReducer from "./slice/modalSlice"
import userReducer from "./slice/authSlice"


const rootReducer = combineReducers({
    modalStore: modalReducer,
    userStore: userReducer
})

export default rootReducer