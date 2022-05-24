import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
          state={store.getState()}
          addMessage={store.addMessage.bind(store)}
          update_new_message_text={store.update_new_message_text.bind(store)}
          addPost={store.addPost.bind(store)}
          update_new_post_text={store.update_new_post_text.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

store.subscribe(renderEntireTree)


renderEntireTree(store.getState())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
