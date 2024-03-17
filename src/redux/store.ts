import { configureStore } from '@reduxjs/toolkit';
import { cartApi } from './services/api';
import cartReducer from './cartSlice';

// использую логгер только в среде development
// import { logger } from './middlewares/logger';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [cartApi.reducerPath]: cartApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([cartApi.middleware]),
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
