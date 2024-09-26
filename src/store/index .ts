import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import expenseReducer from "./expense/expenseSlice";

export const store = configureStore({
    reducer: {
        expense: expenseReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()