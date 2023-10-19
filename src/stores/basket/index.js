import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
};

export const getBasket = createAsyncThunk("basket/getBasket", async () => {
    return Promise.resolve([{ id: 1, title: "elma", price: 5 }]);
});

export const { actions, reducer } = createSlice({
    name: "basket",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBasket.fulfilled, (state, action) => {
            state.basket = action.payload;
        });
    },
});

export const selectBasket = ({ basket }) => basket.basket;