import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        expenses: [
            {name: 'Apple', price: 5000},
            {name: 'Banana', price: 500},
        ],
        income:  555555,
        count: 1
    },
    reducers: {
        updateIncome: (state, action) => {
            state.income = action.payload;
        },
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        }
    }
});

export const { updateIncome, addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;