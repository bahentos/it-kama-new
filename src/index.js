import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

store.subscribe(() => {
  let state = store.getState()
  renderEntireTree(state)
})

renderEntireTree(store.getState())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
