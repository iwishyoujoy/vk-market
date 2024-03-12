import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../types/cart';

interface CartState {
 items: ICartItem[];
}

const initialState: CartState = {
 items: [],
};

export const cartSlice = createSlice({
 name: 'cart',
 initialState,
 reducers: {
    setCartItems: (state, action: PayloadAction<ICartItem[]>) => {
      state.items = action.payload;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
 },
});

export const { setCartItems, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
