import { configureStore } from '@reduxjs/toolkit';

import { logger } from './middlewares/logger';
import { cartApi } from './services/api';
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [cartApi.reducerPath]: cartApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([cartApi.middleware, logger]),
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
