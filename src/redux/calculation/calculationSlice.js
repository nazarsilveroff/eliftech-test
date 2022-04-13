import {createSlice} from "@reduxjs/toolkit"
import {calculator} from "../../utils/calculator";

const localCalcRes = JSON.parse(localStorage.getItem('results'))

const calculationSlice = createSlice({
    name: 'resultsCalculation',
    initialState: [],
    reducers: {
        addResult(state, {payload}) {
            const resCalc = calculator(payload)
            state.push(resCalc)
            if(!localCalcRes){
              return   localStorage.setItem('results', JSON.stringify(state))
            }
            localStorage.setItem('results', JSON.stringify([...localCalcRes,...state]))
        }
    }
})

export const {addResult} = calculationSlice.actions;

export const resultsCalculationSelector = (store) => store.resultsCalculation

export default calculationSlice.reducer;