import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import carouselReducer from "../features/carousel/carouselSlice"

export const store = configureStore({
    reducer: {
        carousel: carouselReducer,
    }, 
});

export type AppDispatch = typeof store.dispatch ;//import AppDispatch type into each component
export type RootState = ReturnType<typeof store.getState>
export type AppThunk <ReturnType = void > = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>