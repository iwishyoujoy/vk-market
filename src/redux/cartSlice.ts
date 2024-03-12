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
      state.items = action.payload.map(item => ({ ...item, quantity: 1 }));
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementItemQuantity: (state, action: PayloadAction<number>) => {
        state.items = state.items.map((item) => {
            if (item.id === action.payload && item.quantity < 10){
                item.quantity++;
            }
            return item;
        })
    },
    decrementItemQuantity: (state, action: PayloadAction<number>) => {
        state.items = state.items.map((item) => {
            if (item.id === action.payload && item.quantity > 1){
                item.quantity--;
            }
            return item;
        })
    }
 },
});

export const { setCartItems, removeItem, incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
