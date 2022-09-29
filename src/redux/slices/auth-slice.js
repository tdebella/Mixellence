import { createSlice } from '@reduxjs/toolkit'

//get local storage token, if exists then loggedIn = true
const localToken = localStorage.getItem('token')
const initialAuthState = {
    loggedIn: localToken ? true : false
}

//keep track of being logged in or not
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        logIn: (state, action) => {
            state.loggedIn = true 
        },
        logOut: (state) => {
            state.loggedIn = false
        }
    }
})

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;