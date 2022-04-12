import {createSlice} from "@reduxjs/toolkit"
import {generate} from 'shortid'

const weatherSlice = createSlice({
    name: 'banks',
    initialState: [],
    reducers: {
        addBank(state, {payload}) {
            state.push({id: generate(), ...payload})
            localStorage.setItem('banks', JSON.stringify(state))
        },
        addBanks(state, {payload}) {
            payload.forEach(bank =>  state.push({id: generate(), ...bank}))
            localStorage.setItem('banks', JSON.stringify(state))
        }
    }
})

export const {addBank, addBanks} = weatherSlice.actions;

export default weatherSlice.reducer;