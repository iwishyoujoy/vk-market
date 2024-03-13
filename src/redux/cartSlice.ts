import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../types/cart';
import { RootState } from './store';

interface CartState {
 items: ICartItem[];
 deliveryCost: number;
}

const initialState: CartState = {
 items: [],
 deliveryCost: 20,
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

export const selectTotalCartPrice = createSelector(
    (state: RootState) => state.cart.items,
    (items) => items.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const { setCartItems, removeItem, incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
