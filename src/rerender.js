import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, postChange,deleteArea} from './State/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

  let reRenderAllTree = (state) => {
    root.render(
      <React.StrictMode>
        <App 
        state= {state} 
        addPost={addPost}
        postChange={postChange}
        deleteArea={deleteArea}
        />
      </React.StrictMode>
    )
    };
    reportWebVitals();
    export default reRenderAllTree