import { configureStore } from "@reduxjs/toolkit";
import HeartSlice from './heart'

export const store = configureStore({
    reducer: {
        heart: HeartSlice
    }
})