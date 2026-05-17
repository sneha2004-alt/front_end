import {createRoot}from 'react-dom/client';

import { CounterProvider } from './Context/CounterContext';
import{App} from './App.jsx';

createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <App/>
  </CounterProvider>,
);