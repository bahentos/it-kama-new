import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addMessage, addPost, update_new_message_text, update_new_post_text } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = (state) => {
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

export default renderEntireTree