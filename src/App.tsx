import {
  AppRoot,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import './App.css';
import { CartPage } from './pages/CartPage';

function App() {
  return (
    <AppRoot>
      <CartPage />
    </AppRoot>
  );
}

export default App;
