import { createSlice } from '@reduxjs/toolkit'

//content initial state
//
const initialContentState = {
    content: {
        aboutUs: '',
        testimonials: [],
        drinks: [],
        bartenders: []
    }
}

//all the editable content being displayed on the page
//
const contentSlice = createSlice({
    name: 'content',
    initialState: initialContentState,
    reducers: {
        updateContent: (state, action) => {
            state.content[action.payload.property] = action.payload.data
        }
    }
})

export const contentActions = contentSlice.actions;

export const contentReducer = contentSlice.reducer;