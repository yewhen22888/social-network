import './index.css';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
function reRenderAllTree(state) {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </React.StrictMode>
  )
};
reportWebVitals();

reRenderAllTree(store.getState());

store.subscribe(() => {

  let state = store.getState()
  reRenderAllTree(state)
});

export default reRenderAllTree

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

