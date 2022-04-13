import {createSlice, current} from "@reduxjs/toolkit"
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
            payload.forEach(bank => state.push({id: generate(), ...bank}))
            localStorage.setItem('banks', JSON.stringify(state))
        },
        deleteBank(state, {payload}) {
            state = current(state).filter(({id}) => id !== payload)
            localStorage.setItem('banks', JSON.stringify(state))
            return state
        },
        editBank(state, {payload}) {
            state = current(state).map((bank) => bank.id === payload.id ? bank = payload : bank)
            localStorage.setItem('banks', JSON.stringify(state))
            return state
        }
    }
})

export const {addBank, addBanks, deleteBank, editBank} = weatherSlice.actions;

export const BanksSelector = (store) => store.banks

export default weatherSlice.reducer;