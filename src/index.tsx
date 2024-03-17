import React from 'react';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StoreProvider } from './redux/storeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider appearance='dark'>
      <AdaptivityProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);

