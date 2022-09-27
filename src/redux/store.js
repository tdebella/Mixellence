import { configureStore } from '@reduxjs/toolkit'
import { contentReducer } from './slices/content-slice'
import { authReducer } from './slices/auth-slice'

const store = configureStore({
    reducer: {
        content: contentReducer,
        auth: authReducer
    }
})

export default store;