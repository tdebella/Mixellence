import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
    token: null
}

//keep track of being logged in or not
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        logIn: (state, action) => {
            state.token = action.payload 
        },
        logOut: (state) => {
            state.token = null
        }
    }
})

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;