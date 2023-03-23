import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { InputValueProvider } from './InputValueContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <InputValueProvider>
      <App />
    </InputValueProvider>
  </React.StrictMode>
);
