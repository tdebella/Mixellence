import { configureStore } from '@reduxjs/toolkit'
import { contentReducer } from './slices/content-slice'
import { authReducer } from './slices/auth-slice'
import { modalReducer } from './slices/modal-slice'

const store = configureStore({
    reducer: {
        content: contentReducer,
        auth: authReducer,
        modal: modalReducer
    }
})

export default store;