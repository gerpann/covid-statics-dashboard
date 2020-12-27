import {createSlice} from '@reduxjs/toolkit'

const mapSlice = createSlice({
    name: 'map',
    initialState: {
        countriesData: [],
        globalData: {},
        curZoom: 2
    },
    reducers: {
        addCountriesData(state, action) {
            let countriesData = action.payload
            state.countriesData = countriesData
        },
        addGlobalData(state, action) {
            let globalData = action.payload
            state.globalData = globalData
        },
        setCurZoom(state, action) {
            state.curZoom = action.payload
        }
    }
})

export const {addCountriesData, setCurZoom, addGlobalData} = mapSlice.actions
export default mapSlice.reducer