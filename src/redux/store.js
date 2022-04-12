import {combineReducers, configureStore} from "@reduxjs/toolkit";
import bankReducer from '../redux/banks/banksSlice'

const rootReducer = combineReducers({
    banks: bankReducer
})
const store = configureStore({
    reducer: rootReducer
})
export default store