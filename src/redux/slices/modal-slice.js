import { createSlice } from '@reduxjs/toolkit'

//content initial state
//
const initialModalState = {
    showModal: false
}

//all the editable content being displayed on the page
//
const modalSlice = createSlice({
    name: 'modal',
    initialState: initialModalState,
    reducers: {
        showModal: (state) => {
            console.log('true')
            state.showModal = true
        },
        hideModal: (state) => {
            console.log('false')
            state.showModal = false
        }
    }
})

export const modalActions = modalSlice.actions;

export const modalReducer = modalSlice.reducer;