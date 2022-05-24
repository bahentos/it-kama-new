import React from 'react';
import reportWebVitals from './reportWebVitals';
import store, { subscribe } from './redux/state'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.state} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

subscribe(renderEntireTree)


renderEntireTree(store.state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
