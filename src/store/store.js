import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
}

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
    }
})

const store = configureStore({
    reducer: contentSlice.reducer
})

export default store;