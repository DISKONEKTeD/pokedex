import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"
import { store } from './state/store';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import reportWebVitals from './reportWebVitals';
import './css/styles.scss'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop/>
        <App />
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
