import React from 'react';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addMessage, addPost, update_new_message_text, update_new_post_text } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} 
          addPost={addPost} 
          update_new_post_text={update_new_post_text} 
          addMessage={addMessage} 
          update_new_message_text={update_new_message_text} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

subscribe(renderEntireTree)


renderEntireTree(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
