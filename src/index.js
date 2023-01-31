import './index.css';
import Store from './State/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

let reRenderAllTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={Store.dispatch.bind(Store)}
      />
    </React.StrictMode>
  )
};
reportWebVitals();
export default reRenderAllTree

reRenderAllTree(Store.getState());

Store.subscribe(reRenderAllTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

