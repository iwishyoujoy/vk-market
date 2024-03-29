'use client'

import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

export const StoreProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Provider store={store}>{children}</Provider>
    );
}