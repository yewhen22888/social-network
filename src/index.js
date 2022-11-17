import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { message: "Hi im okay", likeCounts: '12' },
  { message: 'How old are you', likeCounts: '13' },
  { message: 'i love football', likeCounts: '7' },
]
let dialogs = [
  { id: 1, name: 'Illy' },
  { id: 2, name: 'Dimon' },
  { id: 3, name: 'Evelyn' },
  { id: 4, name: 'Nikol' },
  { id: 5, name: 'Jewheniy' },
]

let messages = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'how are you' },
  { id: 3, message: 'how old are you' },
  { id: 4, message: 'yo' },
  { id: 5, message: 'yo' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
