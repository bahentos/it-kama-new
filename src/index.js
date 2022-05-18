import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let postsData = [
  { id: 1, post: 'Est et cupidatat minim voluptate eiusmod dolore commodo culpa proident pariatur consectetur.' , like_count: 2},
  { id: 2, post: 'Exercitation et anim minim voluptate ad nisi commodo ipsum commodo ad et elit laboris.' , like_count: 5},
  { id: 3, post: 'Ut velit pariatur ex ex ipsum veniam laboris ipsum tempor ipsum enim velit.' , like_count: 7},
  { id: 4, post: 'Et excepteur do est labore velit deserunt duis.' , like_count: 22},
]

let dialogsData = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Anny' },
  { id: 3, name: 'Stieven' },
  { id: 4, name: 'Tony' },
  { id: 5, name: 'Larry' }
]

let messagesData = [
  { id: 1, message: 'Do esse exercitation aliqua ea ullamco est anim do nostrud magna tempor.' },
  { id: 2, message: 'Nulla ea eiusmod magna anim ex commodo ullamco duis nulla anim cupidatat do eiusmod ut.' },
  { id: 3, message: 'Ea ea nisi voluptate deserunt Lorem proident.' },
  { id: 4, message: 'Lorem fugiat exercitation in magna et laboris cillum amet enim excepteur irure ullamco.' },
  { id: 5, message: 'Labore Lorem et veniam est.' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
