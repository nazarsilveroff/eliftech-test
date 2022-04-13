import {combineReducers, configureStore} from "@reduxjs/toolkit";
import bankReducer from '../redux/banks/banksSlice'
import resultsCalculationReducer from './calculation/calculationSlice'

const rootReducer = combineReducers({
    banks: bankReducer,
    resultsCalculation: resultsCalculationReducer,
})
const store = configureStore({
    reducer: rootReducer
})
export default store